from django.shortcuts import render
from accounts.models import Profile, CustomUser
from django.conf import settings
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, ProfileSerializer

User = CustomUser


class APIRootView(APIView):
    """
    The default Root view for the API
    """

    def get(self, request):
        base_url = request.scheme + "://" + request.META["HTTP_HOST"]
        data = [
            {
                "users": {
                    "all": f"{base_url}/api/users/",
                },
                "profiles": {
                    "all": f"{base_url}/api/profiles/",
                },
                "follow": {f"{base_url}/api/follow/<str:username>/"},
                "unfollow": {f"{base_url}/api/unfollow/<str:username>/"},
            }
        ]

        return Response(data)


class CustomUserList(generics.ListAPIView):
    """
    View to list all users

    """

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class CustomUserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "pk"
    permission_classes = [permissions.IsAuthenticated]


class ProfileList(generics.ListAPIView):
    """
    View to list all profiles

    """

    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    # permission_classes = [permissions.IsAuthenticated]


class ProfileDetail(generics.RetrieveAPIView):
    """
    View to view details of a profile

    """

    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    lookup_field = "pk"
    permission_classes = [permissions.IsAuthenticated]


class FollowUserView(APIView):
    """
    View to follow a user

    """

    def get(self, request, username):
        profile = Profile.objects.get(user__username=username)
        return Response(
            {"message": f"you're about to follow {profile.user.username}"}, status=200
        )

    def post(self, request, username):
        profile = Profile.objects.get(user__username=username)
        user = request.user
        profile.followers.add(user.profile)
        profile.save()
        return Response(
            {"message": f"you're now following {profile.user.username}"}, status=200
        )


class UnFollowUserView(APIView):
    """
    View to unfollow a user

    """

    def get(self, request, username):
        profile = Profile.objects.get(user__username=username)
        return Response(
            {"message": f"you're about to unfollow {profile.user.username}"}, status=200
        )

    def post(self, request, username):
        profile = Profile.objects.get(user__username=username)
        user = request.user
        profile.followers.remove(user.profile)
        profile.save()
        return Response(
            {"message": f"you're no longer following {profile.user.username}"},
            status=200,
        )
