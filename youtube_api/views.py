from rest_framework import serializers, status
from rest_framework.views import APIView
from datetime import timedelta, datetime
from django.conf import settings
from .models import *
from .serializers import *
import yt_dlp, jwt,re, os
from django.http import JsonResponse
from pymemcache.client import base
import uuid, json, requests

if settings.USE_CACHE:
    cache = base.Client(('memcached', 11211))
else:
    cache = None

audio_quality = [160, 128, 64, 48]

image_resolutions = {
    'HD Image (1280x720)':'https://img.youtube.com/vi/{id}/maxresdefault.jpg',
    'SD Image (640x480)': 'https://img.youtube.com/vi/{id}/sddefault.jpg',
    'Normal Image (480x360)': 'https://img.youtube.com/vi/{id}/hqdefault.jpg',
    'Normal Image (320x180)': 'https://img.youtube.com/vi/{id}/mqdefault.jpg',
    'Small Image (120x90)': 'https://img.youtube.com/vi/{id}/default.jpg'
}

class getInfo(APIView):
    permission_classes = ()
    authentication_classes = ()

    def get(self, request):
        url = self.request.query_params.get('url')

        if not url:
            raise serializers.ValidationError('URL parameter required', code=status.HTTP_400_BAD_REQUEST)

        # create the cache id
        md5 = uuid.uuid4().hex

        if settings.USE_CACHE:
            info = cache.get(md5)
        else:
            info = None

        if not info:
            ydl_opts = {
                'continue_dl': False,
                'skip_download': True,
                'noplaylist': True,
            }

            ydl = yt_dlp.YoutubeDL(ydl_opts)
            info = ydl.extract_info(url)

            # persist the video data in the cache for 1 hour
            if settings.USE_CACHE:
                cache.set(
                    md5, 
                    json.dumps({
                        'id': info['id'],
                        'title': info["fulltitle"],
                        "thumbnail": info["thumbnail"],
                        "duration": info["duration"],
                        "formats": info['formats']
                    }), 
                    3600
                )
        else:
            info = json.loads(info.decode())

        json.dump(info, open('info.json', 'w'))
        # get the available video resolutions
        resolutions = [res for res in info['formats'] if res["vcodec"] != "none"]
        available_resolutions = []

        for res in resolutions:
            res = res["height"]
            if res not in available_resolutions:
                available_resolutions.append(res)

        bitrates = [res for res in info['formats'] if "abr" in res and res["abr"] != "none" and res['abr'] != 0]
        available_bitrates = []

        for bitrate in bitrates:
            bitrate = int(bitrate["abr"])
            if bitrate not in available_bitrates:
                available_bitrates.append(bitrate)

        return JsonResponse({
            'id': info['id'],
            'cid': md5,
            'title': info["title"],
            "thumbnail": info["thumbnail"],
            "duration": info["duration"],
            "audio_formats": available_bitrates[::-1],
            "video_formats": available_resolutions[::-1]
        })

class thumbnails(APIView):
    permission_classes = ()
    authentication_classes = ()
    serializer_class = thumbnailSerializer

    def post(self, request):
        # check if all required parameters are set
        serializer = thumbnailSerializer(data=request.data, context={'request': request})
        serializer.is_valid(True)
        arguments = serializer.data
        current_time = datetime.now()

        ydl_opts = {
            'continue_dl': False,
            'skip_download': True,
            'noplaylist': True,
        }

        ydl = yt_dlp.YoutubeDL(ydl_opts)

        try:
            info = ydl.extract_info(arguments['url'])
        except:
            raise serializers.ValidationError('Invalid URL', code=status.HTTP_400_BAD_REQUEST)

        result = {
            'title': info["fulltitle"],
            'resolutions': []
        }

        for resolution in image_resolutions:
            uid = uuid.uuid4().hex
            r = requests.get(image_resolutions[resolution].format(id=info['id']))

            f = open('./static/'+uid+".jpg", 'wb')
            for chunk in r.iter_content(chunk_size=512 * 1024): 
                if chunk: 
                    f.write(chunk)
            f.close()

            result['resolutions'].append({
                'lable': resolution,
                'download_url': settings.BASE_URL+'/static/'+uid+".jpg"
            })
            
            # set image deletion date
            delete_on = current_time + timedelta(days=7)
            image = Thumbnail(
                file_name=uid+".jpg",
                delete_on=delete_on
            )
            image.save()

        return JsonResponse(result)

class convert(APIView):
    permission_classes = ()
    authentication_classes = ()
    serializer_class = convertSerializer

    def post(self, request):
        # check if all required parameters are set
        serializer = convertSerializer(data=request.data, context={'request': request})
        serializer.is_valid(True)
        arguments = serializer.data
        current_time = datetime.now()

        # compile youtube_dl config for video download
        if arguments['format'] == 'audio':

            file_name = arguments['id']+'-'+str(arguments['quality'])+'.mp3'
            ydl_opts = {
                'format': 'bestaudio',
                'postprocessors': [{
                    'key': 'FFmpegExtractAudio',
                    'preferredcodec': 'mp3',
                    'preferredquality': str(arguments['quality']),
                }],
                'outtmpl': 'media/%(id)s-{quality}.%(ext)s'.format(quality=str(arguments['quality'])),
                'noplaylist': True,
                'quiet': True,
                'verbose': False
            }
        
        # compile youtube_dl config for audio download
        elif arguments['format'] == 'video':
            file_name = arguments['id']+'-'+str(arguments['quality'])+'.mp4'

            ydl_opts = {
                'format': 'bestvideo[height<={quality}][ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best'.format(quality=arguments['quality']),
                'outtmpl': 'media/%(id)s-{quality}.%(ext)s'.format(quality=str(arguments['quality'])),
                'noplaylist': True,
                'quiet': True,
                'verbose': False
            }

        ydl = yt_dlp.YoutubeDL(ydl_opts)
        
        # check if the video's data is in the cache
        if settings.USE_CACHE:
            info = cache.get(arguments['cid'])
        else:
            info = None

        if not info:
            info = ydl.extract_info('https://www.youtube.com/watch?v='+arguments['id'])
        else:
            info = json.loads(info.decode())

        info = {
            'id': info['id'],
            'title': info["title"],
            "thumbnail": info["thumbnail"],
            "duration": info["duration"],
        }

        download_name = file_name
        if arguments['format'] == 'audio':
            title = re.sub(r'[^\x00-\x7F]+','', info["title"])
            download_name = title+'.mp3'
            
        elif arguments['format'] == 'video':
            title = re.sub(r'[^\x00-\x7F]+','', info["title"])
            download_name = title+'.mp4'

        
        token_expires = current_time + timedelta(minutes = 25)

        # check if the file is already downloaded
        file_path = os.path.join(settings.MEDIA_ROOT, file_name)
        if os.path.exists(file_path):
            token = jwt.encode({"file": file_name, 'download-name': download_name, "exp": token_expires}, settings.SECRET_KEY, algorithm='HS256')
  
            return JsonResponse({'url': settings.BASE_URL+'/download/'+token})

        ydl = yt_dlp.YoutubeDL(ydl_opts)
        ydl.download("https://www.youtube.com/watch?v="+arguments['id'])

        # set the deletion data for the downloaded video
        delete_on = current_time + timedelta(days=7)
        video = Video(
            name=info['title'],
            video_id=info['id'],
            file_name=file_name,
            delete_on=delete_on
        )

        video.save()

        # return the download link
        token = jwt.encode({"file": file_name, 'download-name': download_name, "exp": token_expires}, settings.SECRET_KEY, algorithm='HS256')
  
        return JsonResponse({'url': settings.BASE_URL+'/download/'+token})