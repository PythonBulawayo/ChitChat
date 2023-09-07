from django.urls import path, include
from .views import dashboard, profile_list, profile
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'profiles', views.ProfileViewSet)


app_name = "api"
urlpatterns = [
    path("", include(router.urls)),
    path("profile_list/", profile_list, name="profile_list"),
    path("profile/<int:pk>/", profile, name="profile"),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))

]
