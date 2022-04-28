from django.urls import include, path
from rest_framework import routers
from .views import *

urlpatterns = [
    path("", version),
    path('api/v1/', include('youtube_api.urls')),
    path("download/<str:token>", download),
]

