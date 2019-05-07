from django.db import models
from django.contrib.auth.models import User
from datetime import datetime


# Create your models here.
class Progress(models.Model):
    accomplished = models.CharField(max_length=255)
    working_on = models.CharField(max_length=255)
    blocker = models.CharField(max_length=255)
    standup = models.ForeignKey('Standup', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.accomplished

class Standup(models.Model):
    date = models.DateTimeField('%Y-%d-%b')
    def __str__(self):
        return self.date.strftime("%Y-%d-%b")



