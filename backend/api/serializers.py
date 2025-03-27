from rest_framework import serializers

from news_app.models import News, Author


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
        fields = ["id", "title", "content", "author_id", "author"]


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
