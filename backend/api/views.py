from news_app.models import News
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from api.serializers import NewsSerializer, PageDataSerializer

# Create your views here.


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class PageDataView(APIView):
    def get(self, request):
        data = PageDataSerializer.get_page_data()
        return Response({"data": data})
