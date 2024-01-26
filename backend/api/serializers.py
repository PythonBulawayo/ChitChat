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


class FollowerSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name="api:profile-detail", lookup_field="pk"
    )
    username = serializers.SerializerMethodField()

    def get_username(self, obj):
        return f"{obj.user.username}"

    class Meta:
        model = Profile
        fields = ["username", "url"]


class ProfileSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name="api:profile-detail", lookup_field="pk"
    )
    user = serializers.SerializerMethodField()
    follows = FollowerSerializer(many=True, read_only=True)
    followers = FollowerSerializer(many=True, read_only=True)

    def get_user(self, obj):
        return obj.user.username

    class Meta:
        model = Profile
        fields = "__all__"
        lookup_field = "pk"
