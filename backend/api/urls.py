from django.urls import include, path
from rest_framework import routers
from api.views import NewsViewSet, PageDataView, UploadView, UserViewset

router = routers.DefaultRouter()
router.register(r"/news", NewsViewSet)
router.register(r"/user", UserViewset)
urlpatterns = [
    path("", include(router.urls)),
    path("/page-data/", PageDataView.as_view(), name="page-data"),
    path("/upload/", UploadView.as_view(), name="upload"),
]
