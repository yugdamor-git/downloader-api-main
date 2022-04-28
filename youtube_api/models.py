from django.db import models

class Video(models.Model):
    name = models.CharField(max_length=255)
    video_id = models.CharField(max_length=255)
    file_name = models.CharField(max_length=255)
    delete_on = models.DateTimeField(blank=True, null=True)
    created_on = models.DateTimeField(auto_now_add=True)

class Thumbnail(models.Model):
    file_name = models.CharField(max_length=255)
    delete_on = models.DateTimeField(blank=True, null=True)
    created_on = models.DateTimeField(auto_now_add=True)