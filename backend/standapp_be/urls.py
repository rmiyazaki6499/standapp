from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from progress.views import ProgressViewSet
from standup.views import StandupViewSet
from team.views import TeamViewSet
from user.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'progress', ProgressViewSet)
router.register(r'standups', StandupViewSet)
router.register(r'teams', TeamViewSet)
router.register(r'user', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
