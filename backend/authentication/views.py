from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework import status, generics
from django.conf import settings
from rest_framework.permissions import AllowAny
from authentication.serializers import AuthUserSerializer
from authentication.serializers import RefreshTokenSerializer


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
                    # domain='example.com'
                )
                response.data = data
                response.status_code = status.HTTP_200_OK
                return response
            else:
                return Response({"details": "This account is not active."}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"details": "Account with given credentials not found."}, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(generics.GenericAPIView):
    permission_classes = []
    authentication_classes = []
    serializer_class = None

    def post(self, request):
        response = Response()
        response.set_cookie(
            key=settings.SIMPLE_JWT["AUTH_COOKIE"],
            max_age=0,
            # domain='example.com',
            secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
            #expires="Thu, 01 Jan 1970 00:00:00 GMT", Setting max_age=0 is good enough 
            samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"]
        )
        response.data = {"detail": "Logout successful."}
        return response
    



class RefreshTokenView(generics.GenericAPIView):
    permission_classes = [AllowAny]  # Public access for this endpoint
    authentication_classes = []
    serializer_class = RefreshTokenSerializer  # Assign the serializer to the view


    
    def post(self, request, *args, **kwargs):
        # Extract the refresh token from the request
        refresh_token = request.data.get("refresh", None)

        if not refresh_token:
            return Response({"detail": "Refresh token is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Create a RefreshToken instance from the provided refresh token
            token = RefreshToken(refresh_token)
            # Generate a new access token using the refresh token
            new_access_token = str(token.access_token)

            # Respond with the new tokens
            return Response({
                "access": new_access_token,
            }, status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response({"detail": "Invalid refresh token."}, status=status.HTTP_400_BAD_REQUEST)