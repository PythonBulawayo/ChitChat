from accounts.models import Profile, CustomUser
from core.models import Post
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        # lookup_field = "pk"
        exclude = ["password", "groups", "user_permissions", "is_staff", "is_active"]


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


class PostSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name="api:post-detail", lookup_field="pk"
    )
    user_profile = serializers.HyperlinkedRelatedField(
        view_name="api:profile-detail", read_only=True
    )

    class Meta:
        model = Post
        fields = "__all__"
        lookup_field = "pk"
        extra_kwargs = {"url": {"lookup_field": "pk"}}
