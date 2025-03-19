from django.urls import include, path
from rest_framework import routers
from api.views import NewsViewSet
router = routers.DefaultRouter()
router.register(r'', NewsViewSet)
urlpatterns = [
    path('', include(router.urls)),
  
]

