from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page

from rest_framework import viewsets
from rest_framework.response import Response

from clouds.serializers import CloudSerializer


class CloudViewSet(viewsets.ViewSet):
    serializer_class = CloudSerializer

    def list(self, request, format=None):
        content = (
            {
                "cloud_description": "Africa, South Africa - Amazon Web Services: Cape Town",
                "cloud_name": "aws-af-south-1",
                "geo_latitude": -33.92,
                "geo_longitude": 18.42,
                "geo_region": "africa",
            },
        )
        return Response(content)
