from django.urls import include, path
from rest_framework import routers
from api.views import NewsViewSet, PageDataView, UploadView

router = routers.DefaultRouter()
router.register(r"", NewsViewSet)
urlpatterns = [
    path("", include(router.urls)),
    path("/page-data/", PageDataView.as_view(), name="page-data"),
    path("/upload/", UploadView.as_view(), name="upload"),
]
