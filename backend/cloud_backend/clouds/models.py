from django.db import models


class Cloud(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField(blank=True, default="")
    latitude = models.DecimalField(max_digits=20, decimal_places=14, default=0)
    longitude = models.DecimalField(max_digits=20, decimal_places=14, default=0)
    region = models.CharField(max_length=100)

    class Meta:
        indexes = [models.Index(fields=["name"])]

    def __str__(self):
        return "%s" % (self.name)
