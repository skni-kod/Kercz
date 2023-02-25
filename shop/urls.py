from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("api", views.GetRoutes.as_view(), name="routes"),
    path("api/token/", views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path('shop/', views.index, name='index'),
    path('register/', views.register, name='register'),
    path('items',views.getItem, name="items"),
]
