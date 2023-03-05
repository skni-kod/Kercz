from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("api", views.GetRoutes.as_view(), name="routes"),
    path("api/token/", views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/products/", views.ProductList.as_view(), name='product_list'),
    path("api/photo/", views.ProductList.as_view(), name='photo_list'),
    path('shop/', views.index, name='index'),
    path('register/', views.register, name='register'),
]
