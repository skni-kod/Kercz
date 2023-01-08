from django.contrib import admin
from .models import (
    Client,
    Product,
    Opinion,
    Address,
    Order,
    Size,
    OrderRecord,
    ShippingType,
    Payment,
    Photo,
    ProductSize,
    ProductCategory,
    Category,
    SubcategoryCategory,
)


admin.site.register(Client)
admin.site.register(Product)
admin.site.register(Opinion)
admin.site.register(Address)
admin.site.register(Order)
admin.site.register(OrderRecord)
admin.site.register(Size)
admin.site.register(ShippingType)
admin.site.register(Payment)
admin.site.register(Photo)
admin.site.register(Category)
admin.site.register(SubcategoryCategory)
admin.site.register(ProductSize)
admin.site.register(ProductCategory)
