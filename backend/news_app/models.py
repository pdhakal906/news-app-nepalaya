from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password


class User(AbstractUser):
    email = models.EmailField(unique=True)
    role = models.CharField(
        max_length=20,
        choices=[("editor", "Editor"), ("author", "Author"), ("general", "General")],
        default="author",
    )
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "role"]


class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Authors"

    def __str__(self):
        return self.first_name + " " + self.last_name


class News(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    featured_image = models.ImageField(upload_to="", null=True, blank=True)
    featured_image_url = models.URLField(max_length=1024, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "News Items"
        verbose_name = "News"
        ordering = ["-created_at"]

    def __str__(self):
        return self.title
