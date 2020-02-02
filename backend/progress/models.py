from django.db import models
from django.conf import settings

from standup.models import Standup

class Progress(models.Model):
    accomplished = models.CharField(max_length=255)
    working_on = models.CharField(max_length=255)
    blocker = models.CharField(max_length=255)
    standup = models.ForeignKey(Standup, on_delete=models.CASCADE)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.accomplished
