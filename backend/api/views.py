from django.shortcuts import render
from accounts.models import Profile, CustomUser
from django.conf import settings
from rest_framework import generics, permissions
from .serializers import UserSerializer, ProfileSerializer

User = CustomUser


def dashboard(request):
    return render(request, "base.html")


class CustomUserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class CustomUserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "pk"
    permission_classes = [permissions.IsAuthenticated]


class ProfileList(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]


class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    lookup_field = "pk"
    permission_classes = [permissions.IsAuthenticated]
