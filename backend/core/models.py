from django.db import models
from accounts.models import Profile


class Post(models.Model):
    body = models.CharField(max_length=280)
    created_at = models.DateTimeField(auto_now_add=True)
    likes_count = models.IntegerField(default=0)
    user_profile = models.ForeignKey(
        Profile, related_name="posts", on_delete=models.DO_NOTHING
    )

    def __str__(self):
        return f"{self.created_at.date()} - {self.user_profile.user} - {self.body}"
