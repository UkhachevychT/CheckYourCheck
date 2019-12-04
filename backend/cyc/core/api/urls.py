from django.urls import include, path
from rest_framework.routers import DefaultRouter
from cyc.core.api import views


router = DefaultRouter()
router.register('check', views.CheckViewSet, base_name='check')

urlpatterns = router.urls