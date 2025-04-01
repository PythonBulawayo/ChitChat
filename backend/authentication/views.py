from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework import status, generics
from django.conf import settings

from authentication.serializers import AuthUserSerializer


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }


class LoginView(generics.GenericAPIView):
    permission_classes = []
    authentication_classes = []
    serializer_class = AuthUserSerializer

    def post(self, request, format=None):
        data = request.data
        response = Response()
        username = data.get("username", None)
        password = data.get("password", None)
        user = authenticate(username=username, password=password)

        if user is not None:
            if user.is_active:
                data = get_tokens_for_user(user)
                response.set_cookie(
                    key=settings.SIMPLE_JWT["AUTH_COOKIE"],
                    value=data["access"],
                    secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
                    httponly=settings.SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"],
                    samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
                    max_age=823396,
                )
                response.data = data
                response.status_code = status.HTTP_200_OK
                return response
            else:
                return Response(
                    {"details": "This account is not active."},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        else:
            return Response(
                {"details": "Account with given credentials not found."},
                status=status.HTTP_400_BAD_REQUEST,
            )


class LogoutView(generics.GenericAPIView):
    permission_classes = []
    authentication_classes = []
    serializer_class = None

    def post(self, request):
        response = Response()
        response.set_cookie(
            key=settings.SIMPLE_JWT["AUTH_COOKIE"],
            max_age=0,
            secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
            expires="Thu, 01 Jan 1970 00:00:00 GMT",
            samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
        )
        response.data = {"detail": "Logout successful."}
        return response
