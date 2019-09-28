from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from standapp_be.app import views

router = routers.DefaultRouter()
router.register(r'progress', views.ProgressViewSet)
router.register(r'standups', views.StandupViewSet)
router.register(r'user', views.UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
