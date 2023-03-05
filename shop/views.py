from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer
from .serializers import ProductSerializer
from .models import Product, Photo
from rest_framework import generics


def index(request):
    return HttpResponse("Hello, world! You'ra at the shop!")


def login(request):
    return HttpResponse("Logowanie")


class GetRoutes(APIView):
    def get(self, request):
        routes = ["/api/token", "/api/token/refresh"]
        return Response(routes)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class PhotoList(generics.ListAPIView):
    queryset = Photo.objects.all()
    serializer_class = ProductSerializer


def register(request):
    return HttpResponse("Rejestracja")
