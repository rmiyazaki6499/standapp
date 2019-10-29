from django.contrib import admin
from .models import Progress, Standup, Team, User

# Register your models here.
admin.site.register(Progress)
admin.site.register(Standup)
admin.site.register(Team)
admin.site.register(User)
