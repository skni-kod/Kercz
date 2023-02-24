from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from django.core.serializers import serialize
from .serializers import MyTokenObtainPairSerializer, PhotoSerializer
from .models import *;


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


def register(request):
    return HttpResponse("Rejestracja")

class Items(APIView):
    def get(self,request):
        items={}
        item_arr=[]
        products=Product.objects.all()
        photo_arr=[]
        photos=Photo.objects.filter(product=products[0])
        for p in photos:
            photo_arr.append(PhotoSerializer(p,context={'request':request}).data)
        item={
            "id":products[0].id,
            "model":products[0].model,
            "price":products[0].price,
            "mark":products[0].mark,
            "description":products[0].description,
            "photos":photo_arr
            }
        item_arr.append(item)
        items["items"]=item_arr
        return Response(items)


