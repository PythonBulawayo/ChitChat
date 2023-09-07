from django.shortcuts import render
from accounts.models import Profile, CustomUser
from django.conf import settings
from rest_framework import viewsets, permissions
from .serializers import UserSerializer, ProfileSerializer

User = CustomUser

def dashboard(request):
    return render(request, "base.html")


def profile_list(request):
    profiles = Profile.objects.exclude(user=request.user)
    return render(request, "api/profile_list.html", {"profiles": profiles})


def profile(request, pk):
    profile = Profile.objects.get(pk=pk)
    print(profile)
    return render(request, "api/profile.html", {"profile": profile})


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = CustomUser.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class ProfileViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows user profiles to be viewed or edited
    """

    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

