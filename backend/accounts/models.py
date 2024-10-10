from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    pass

    def __str__(self):
        return self.username


class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)
    follows = models.ManyToManyField(
        "self", related_name="followers", symmetrical=False, blank=True
    )
    profile_picture = models.ImageField(upload_to="profile_pictures", blank=True)

    def __str__(self):
        return f" {self.user.username} - Profile"

    class Meta:
        ordering = ["-pk"]
