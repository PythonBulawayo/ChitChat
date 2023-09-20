from django.db.models.signals import post_save
from .models import CustomUser, Profile
from django.dispatch import receiver


@receiver(post_save, sender=CustomUser)
def create_profile(sender, instance, created, **kwargs):
    if created:
        user_profile = Profile.objects.create(user=instance)
        user_profile.save()
        user_profile.follows.add(instance.profile)
        user_profile.save()
