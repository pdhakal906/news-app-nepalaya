from news_app.models import News
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from api.serializers import NewsSerializer, PageDataSerializer, UploadSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi




class NewsViewSet(viewsets.ModelViewSet):

    def get_permissions(self):
          """
          Instantiates and returns the list of permissions that this view requires.
          """
          if self.action in ["list", "retrieve"]:
              permission_classes = [AllowAny]
          else:
              permission_classes = [IsAuthenticated]
          return [permission() for permission in permission_classes]
    parser_classes = [MultiPartParser, FormParser]
    queryset = News.objects.all()
    # querset = News.objects.all().order_by("-created_at").values()  
    serializer_class = NewsSerializer


class PageDataView(APIView):
    def get(self, request):
        data = PageDataSerializer.get_page_data()
        return Response({"data": data})



class UploadView(APIView):
    parser_classes = [MultiPartParser, FormParser]

    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter(
                "image",
                openapi.IN_FORM,
                description="Upload an image file",
                type=openapi.TYPE_FILE,
                required=True,
            )
        ],
        request_body=UploadSerializer,
    )
    def post(self, request, *args, **kwargs):
        serializer = UploadSerializer(data=request.data)
        if serializer.is_valid():
            image_url = serializer.save()

            return Response(
                {"image_url": image_url},
                status=status.HTTP_201_CREATED,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
