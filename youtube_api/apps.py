from django.apps import AppConfig
import os


class YoutubeApiConfig(AppConfig):
    name = 'youtube_api'
    
    def ready(self):
        from . import jobs
        jobs.start_scheduler()