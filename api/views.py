from django.http import HttpResponse
from django.conf import settings
import mimetypes
import jwt, os
from django.http import JsonResponse

def version(request):
    return JsonResponse({
            'status':{
                'database': 'up'
            },
            'version': '0.0.1'
        })


def download(request, token):
    try:
        decoded = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
    except:
        return JsonResponse({'error':"Invalid / Expired token"}, status=400)

   
    file_path = os.path.join(settings.MEDIA_ROOT, decoded['file'])
    if not os.path.exists(file_path):
        return JsonResponse({'error':'file not found'}, status=404)

    mime_type, _ = mimetypes.guess_type(file_path)

    # internal redirect for nginx to handle the download
    response = HttpResponse()
    response['X-Accel-Redirect'] = f'/media/'+decoded['file']    
    response['Content-Type'] = mime_type
    response['Content-Disposition'] = 'attachment; filename="{}"'.format(
        decoded['download-name']
    )
    return response