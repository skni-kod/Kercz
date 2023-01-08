from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
from .managers import ClientManager


MAX_LENGTH = 30


class Client(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=MAX_LENGTH)
    last_name = models.CharField(max_length=MAX_LENGTH)
    login = models.CharField(max_length=MAX_LENGTH)
    phone_number = models.IntegerField(default=0)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = ClientManager()
    REQUIRED_FIELDS = ["name", "login"]
    USERNAME_FIELD = "email"
    EMAIL_FILELD = "email"

    def __str__(self) -> str:
        return self.email

    def get_full_name(self):
        return f"{self.name} {self.last_name}"

    def get_short_name(self):
        return self.name

    class Meta:
        verbose_name = "Client"
        verbose_name_plural = "Clients"


class Product(models.Model):
    price = models.IntegerField()
    description = models.TextField()
    model = models.CharField(max_length=MAX_LENGTH)
    mark = models.CharField(max_length=MAX_LENGTH)

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"


class Opinion(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    stars = models.IntegerField()
    coment = models.TextField()

    class Meta:
        verbose_name = "Opinion"
        verbose_name_plural = "Opinions"


class Address(models.Model):
    location = models.CharField(max_length=MAX_LENGTH)
    street = models.CharField(max_length=MAX_LENGTH)
    zip_code = models.CharField(max_length=5)
    house_number = models.IntegerField()
    apartment_number = models.IntegerField()
    client = models.ForeignKey(Client, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Address"
        verbose_name_plural = "Addresses"


class Order(models.Model):
    order_date = models.DateField()
    shipping_date = models.DateField()
    delivery_date = models.DateField()
    client_name = models.CharField(max_length=MAX_LENGTH)
    client_last_name = models.CharField(max_length=MAX_LENGTH)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Order"
        verbose_name_plural = "Orders"


class Size(models.Model):
    size = models.CharField(max_length=MAX_LENGTH)

    class Meta:
        verbose_name = "Size"
        verbose_name_plural = "Sizes"


class OrderRecord(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    size = models.ForeignKey(Size, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "OrderRecord"
        verbose_name_plural = "OrderRecords"


class ShippingType(models.Model):
    type = models.CharField(max_length=MAX_LENGTH)

    class Meta:
        verbose_name = "ShippingType"
        verbose_name_plural = "ShippingTypes"


class Payment(models.Model):
    amount = models.IntegerField()
    date_of_receiving_payment = models.DateField()

    class Meta:
        verbose_name = "Payment"
        verbose_name_plural = "Payments"


class Photo(models.Model):
    photo = models.CharField(max_length=MAX_LENGTH)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Photo"
        verbose_name_plural = "Photos"


class ProductSize(models.Model):
    size = models.ForeignKey(Size, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    class Meta:
        verbose_name = "ProductSize"
        verbose_name_plural = "ProductSizes"


class Category(models.Model):
    category_name = models.CharField(max_length=MAX_LENGTH)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"


class ProductCategory(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "ProductCategory"
        verbose_name_plural = "ProductCategories"


class SubcategoryCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    category_name = models.CharField(max_length=MAX_LENGTH)

    class Meta:
        verbose_name = "SubcategoryCategory"
        verbose_name_plural = "SubcategoryCategories"
