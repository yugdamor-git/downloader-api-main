from django.urls import include, path
from .views import *
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path("info", getInfo.as_view(), name="info"),
    path("convert", convert.as_view(), name="convert"),
    path("thumbnails", thumbnails.as_view(), name="thumbnails")
]