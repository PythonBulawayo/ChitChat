from django.shortcuts import render
from accounts.models import Profile


def dashboard(request):
    return render(request, "base.html")


def profile_list(request):
    profiles = Profile.objects.exclude(user=request.user)
    return render(request, "api/profile_list.html", {"profiles": profiles})


def profile(request, pk):
    profile = Profile.objects.get(pk=pk)
    print(profile)
    return render(request, "api/profile.html", {"profile": profile})
