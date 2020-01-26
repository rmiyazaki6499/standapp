from django.db import models
from django.conf import settings

from team.models import Team


class Standup(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    users = models.ManyToManyField(settings.AUTH_USER_MODEL)
