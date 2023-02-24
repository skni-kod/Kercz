from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
import os
from .models import Photo


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token["email"] = user.email
        token["name"] = user.name
        token["last_name"] = user.last_name
        token["login"] = user.login
        token["phone_number"] = user.phone_number

        return token

class PhotoSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()

    class Meta:
        model = Photo
        fields = ('id','photo_url')

    def get_photo_url(self, obj):
        #request = self.context.get('request')
        photo_url = obj.photo.url
        return os.path.basename(photo_url)
        #return request.build_absolute_uri(photo_url)