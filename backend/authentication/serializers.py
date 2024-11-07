from rest_framework import serializers

from accounts.models import CustomUser


class AuthUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["username", "password"]

class RefreshTokenSerializer(serializers.Serializer):
    refresh = serializers.CharField(required=True)
