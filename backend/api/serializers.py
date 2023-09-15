from django.conf import settings
from accounts.models import Profile, CustomUser
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name="api:user-detail",
        lookup_field="pk",
    )

    class Meta:
        model = CustomUser
        lookup_field = "pk"
        fields = [
            "username",
            "email",
            "pk",
            "url",
        ]


class ProfileSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name="api:profile-detail", lookup_field="pk"
    )
    user = serializers.SerializerMethodField()
    follows = serializers.SerializerMethodField()
    followed_by = serializers.SerializerMethodField()

    def get_user(self, obj):
        return obj.user.username

    def get_follows(self, obj):
        f = obj.follows.all()
        return [profile.user.username for profile in f]

    def get_followed_by(self, obj):
        fb = obj.followed_by.all()
        return [profile.user.username for profile in fb]

    class Meta:
        model = Profile
        fields = "__all__"
        lookup_field = "pk"
