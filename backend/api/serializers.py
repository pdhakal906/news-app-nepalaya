from rest_framework import serializers

from news_app.models import News, Author
import os
from datetime import datetime
from django.conf import settings
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token["role"] = user.role
        # ...

        return token

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ["id", "first_name", "last_name"]


class NewsSerializer(serializers.ModelSerializer):

    author_id = serializers.PrimaryKeyRelatedField(
        queryset=Author.objects.all(), source="author", write_only=True
    )

    author = AuthorSerializer(read_only=True)

    class Meta:
        model = News
        fields = ["id", "title", "content", "featured_image", "featured_image_url", "author_id", "author"]


class PageDataSerializer(serializers.Serializer):

    @classmethod
    def get_page_data(cls):
        authors = Author.objects.all()
        # data = AuthorSerializer(authors, many=True).data
        final_data = []
        for indv_author in authors:
            id = indv_author.id
            name = indv_author.first_name + " " + indv_author.last_name
            final_data.append({"value": str(id), "label": name})
        return final_data

        # return data


class UploadSerializer(serializers.Serializer):
    image = serializers.ImageField()

    def validate(self, attrs):
        image = attrs["image"]

        ext = os.path.splitext(image.name)[1].lower()
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S%f")

        if ext not in [".jpg", ".jpeg", ".png"]:
            raise serializers.ValidationError("Invalid file type. Only JPG, JPEG, and PNG files are allowed.")
        
        image.name = f"{timestamp}{ext}"
        return attrs

    def save(self):
        image = self.validated_data["image"]

        upload_path = os.path.join(settings.MEDIA_ROOT, image.name)

        # Ensure the directory exists
        os.makedirs(os.path.dirname(upload_path), exist_ok=True)

        # Save the file
        with open(upload_path, "wb+") as destination:
            for chunk in image.chunks():
                destination.write(chunk)

        return f"{image.name}"