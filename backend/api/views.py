from news_app.models import News
from rest_framework import viewsets
from api.serializers import NewsSerializer
# Create your views here.

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
