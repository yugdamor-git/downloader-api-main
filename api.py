import  yt_dlp, json
from flask_restful import Resource, Api
from flask import Flask


options = {
    'continue_dl': False,
    'skip_download': True,
    'noplaylist': True,
}

with yt_dlp.YoutubeDL(options) as ydl:
    meta = ydl.extract_info(
        'https://www.youtube.com/watch?v=Pc4g1-UTDPE', download=False) 
    formats = meta.get('formats', [meta])

    o = open('formats.json', 'w')
    json.dump(formats, o)
    o.close()