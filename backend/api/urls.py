from django.urls import path, include
from rest_framework import routers
from api import views


app_name = "api"
urlpatterns = [
    path("", views.APIRootView.as_view(), name="api-root"),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("api/users/", views.CustomUserList.as_view(), name="users"),
    path("api/users/<int:pk>/", views.CustomUserDetail.as_view(), name="user-detail"),
    path("api/profiles/", views.ProfileList.as_view(), name="profiles"),
    path(
        "api/profiles/<int:pk>/", views.ProfileDetail.as_view(), name="profile-detail"
    ),
    path(
        "api/follow/<str:username>/", views.FollowUserView.as_view(), name="follow-user"
    ),
    path(
        "api/unfollow/<str:username>/",
        views.UnFollowUserView.as_view(),
        name="unfollow-user",
    ),
    path("api/posts/", views.PostList.as_view(), name="posts-list"),
    path("api/posts/<int:pk>/", views.PostDetail.as_view(), name="post-detail"),
    path("api/signup", views.SignUpView.as_view(), name="signup-view"),
]
