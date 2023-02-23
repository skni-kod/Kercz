from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer
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
        products=Product.objects.all()
        context={"items":{0:{"model":products[0].model,"price":products[0].price}}}
        return Response(context)
