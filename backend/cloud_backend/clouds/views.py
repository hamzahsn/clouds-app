import requests

from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page

from rest_framework import viewsets
from rest_framework.response import Response

from clouds.serializers import CloudSerializer


class CloudViewSet(viewsets.ViewSet):
    serializer_class = CloudSerializer

    def list(self, request, format=None):
        request = requests.get("https://api.aiven.io/v1/clouds")
        return Response(request.json())
