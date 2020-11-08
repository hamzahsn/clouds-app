from django.test import TestCase

from clouds.serializers import CloudSerializer


class TestCloudSerializer(TestCase):
    def test_correct_fields(self):
        serializer = CloudSerializer()
        expected_fields = [
            "id",
            "name",
            "description",
            "latitude",
            "longitude",
            "region",
        ]

        self.assertEqual(len(expected_fields), len(serializer.fields))
        for field_name in expected_fields:
            self.assertIn(field_name, serializer.fields)
