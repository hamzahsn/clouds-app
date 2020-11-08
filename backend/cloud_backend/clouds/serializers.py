from rest_framework import serializers

from clouds.models import Cloud


class CloudSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Cloud
        fields = "__all__"