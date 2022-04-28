from rest_framework import serializers
from .models import *

UserTypes = ['video', 'audio']
audio_quality = [160, 128, 64, 48]
video_quality = [1080, 720, 480, 360, 240, 144]

def required(value):
    if value is None:
        raise serializers.ValidationError('This field is required')

class ChoiceField(serializers.ChoiceField):

    def to_representation(self, obj):
        if obj == '' and self.allow_blank:
            return obj
        return self._choices[obj]

    def to_internal_value(self, data):
        # To support inserts with the value
        if data == '' and self.allow_blank:
            return ''

        for key, val in self._choices.items():
            if val == data:
                return key

        self.fail('invalid_choice', input=data)

class convertSerializer(serializers.Serializer):
    id = serializers.CharField(required=True, validators=[required])
    cid = serializers.CharField(required=True, validators=[required])
    quality = serializers.IntegerField(required=True)
    format = ChoiceField(required=True,  choices=UserTypes)

class thumbnailSerializer(serializers.Serializer):
    url = serializers.CharField(required=True, validators=[required])