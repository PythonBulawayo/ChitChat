from django.urls import path, include
from rest_framework import routers
from api import views


app_name = "api"
urlpatterns = [
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("users/", views.CustomUserList.as_view(), name="users"),
    path("users/<int:pk>/", views.CustomUserDetail.as_view(), name="user-detail"),
    path("profiles/", views.ProfileList.as_view(), name="profiles"),
    path("profiles/<int:pk>/", views.ProfileDetail.as_view(), name="profile-detail"),
]
