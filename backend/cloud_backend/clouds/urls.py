from django.urls import include, path

from rest_framework import routers

from clouds.views import CloudViewSet

app_name = "cloud-api"

router = routers.SimpleRouter()
router.register("clouds", CloudViewSet, basename="cloud")

urlpatterns = router.urls