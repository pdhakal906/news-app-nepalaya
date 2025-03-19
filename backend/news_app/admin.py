from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Author, News, User

# Register your models here.

admin.site.register(User, UserAdmin)
admin.site.register(Author)
admin.site.register(News)
