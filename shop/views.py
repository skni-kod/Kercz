from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
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



@api_view(['POST'])
def getItem(request):
    print(request.data["items"])
    items={}
    item_arr=[]
    for i in request.data["items"]:
        try:
            product=Product.objects.get(id=i["id"])
            item={
                "id":product.id,
                "model":product.model,
                "price":product.price,
                "mark":product.mark,
                "description":product.description
                }
            if( i.get("photo",False)):
                photo_arr=[]
                photos=Photo.objects.filter(product=product)
                for p in photos:
                    photo_arr.append(PhotoSerializer(p,context={'request':request}).data)
                item["photos"]=photo_arr
            if( i.get("size",False)):
                sizes_arr=[]
                sizes=ProductSize.objects.filter(product=product)
                for s in sizes:
                    sizes_arr.append({"size":s.size.size, "quantity":s.quantity})
                sizes_arr.sort(key=lambda x:x["size"])
                item["sizes"]=sizes_arr
            item_arr.append(item)
        except:
            print("exception")
    items["items"]=item_arr
    return Response(items)
