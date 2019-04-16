from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Progress(models.Model):
    accomplished = models.CharField(max_length=255)
    working_on = models.CharField(max_length=255)
    blocker = models.CharField(max_length=255)
    standup = models.ForeignKey('Standup', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Standup(models.Model):
    date = models.DateTimeField(auto_now=True, auto_now_add=False)



