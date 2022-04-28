from .schedule import Scheduler
from .models import *
from datetime import datetime
from django.utils import timezone
import os

def delete_files():
    # check for expired downloads and delete files
    videos = Video.objects.filter(delete_on__lt=datetime.now(tz=timezone.utc))

    for video in videos:
        try:
            os.remove("./media/"+video.file_name)
        except:
            pass

        video.delete()

    thumbnails = Thumbnail.objects.filter(delete_on__lt=datetime.now(tz=timezone.utc))

    for thumbnail in thumbnails:
        try:
            os.remove("./static/"+thumbnail.file_name)
        except:
            pass

        thumbnail.delete()

def start_scheduler():
    scheduler = Scheduler()
    scheduler.every(5).minutes.do(delete_files)
    scheduler.run_continuously()