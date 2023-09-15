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
    follows = serializers.HyperlinkedIdentityField(
        view_name="api:profile-detail", lookup_field="pk", many=True
    )
    followers = serializers.HyperlinkedIdentityField(
        view_name="api:profile-detail", lookup_field="pk", many=True
    )

    def get_user(self, obj):
        return obj.user.username

    class Meta:
        model = Profile
        fields = "__all__"
        lookup_field = "pk"
