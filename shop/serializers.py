from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import Product, Photo


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


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'price', 'description', 'model', 'mark']


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['photo', 'product']
