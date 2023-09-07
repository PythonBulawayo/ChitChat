from django.conf import settings
from accounts.models import Profile, CustomUser
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = CustomUser
        fields = ["username", "email", ]


class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    follows = serializers.SerializerMethodField()
    followed_by = serializers.SerializerMethodField()

    def get_user(self,obj):
        return obj.user.username

    def get_follows(self,obj):
        f = obj.follows.all()
        return [profile.user.username for profile in f]

    def get_followed_by(self,obj):
        fb = obj.followed_by.all()
        return [profile.user.username for profile in fb]

    class Meta:
        model = Profile
        fields = ["user",  "followed_by", "follows"]