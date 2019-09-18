from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

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
    date = models.DateTimeField(auto_now_add=True)
    user = models.ManyToManyField(User)