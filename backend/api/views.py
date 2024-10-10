import django_filters.rest_framework
from rest_framework import filters, generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.models import CustomUser, Profile
from core.models import Post

from .serializers import PostSerializer, ProfileSerializer, UserSerializer

User = CustomUser


class APIRootView(APIView):
    """
    The default Root view for the API
    """

    def get(self, request):
        base_url = request.scheme + "://" + request.META["HTTP_HOST"]
        data = [
            {
                "users": {
                    "all": f"{base_url}/api/users/",
                },
                "profiles": {
                    "all": f"{base_url}/api/profiles/",
                },
                "follow": {f"{base_url}/api/follow/<str:username>/"},
                "unfollow": {f"{base_url}/api/unfollow/<str:username>/"},
                "posts": {f"{base_url}/api/posts/"},
                "post_detail": {f"{base_url}/api/posts/<int:pk>/"},
                "post_create": {f"{base_url}/api/posts/new/"},
                "post_delete": {f"{base_url}/api/posts/delete/<int:pk>/"},
            }
        ]

        return Response(data)


class CustomUserList(generics.ListAPIView):
    """
    View to list all users

    """

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class CustomUserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "pk"
    permission_classes = [permissions.IsAuthenticated]


class ProfileList(generics.ListAPIView):
    """
    View to list all profiles

    """

    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetail(generics.RetrieveUpdateAPIView):
    """
    View to view or update profile details

    """

    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    lookup_field = "pk"
    permission_classes = [permissions.IsAuthenticated]


class FollowUserView(APIView):
    """
    View to follow a user

    """

    def get(self, request, username):
        profile = Profile.objects.get(user__username=username)
        return Response(
            {"message": f"you're about to follow {profile.user.username}"}, status=200
        )

    def post(self, request, username):
        profile = Profile.objects.get(user__username=username)
        user = request.user
        profile.followers.add(user.profile)
        profile.save()
        return Response(
            {"message": f"you're now following {profile.user.username}"}, status=200
        )


class UnFollowUserView(APIView):
    """
    View to unfollow a user

    """

    def get(self, request, username):
        profile = Profile.objects.get(user__username=username)
        return Response(
            {"message": f"you're about to unfollow {profile.user.username}"}, status=200
        )

    def post(self, request, username):
        profile = Profile.objects.get(user__username=username)
        user = request.user
        profile.followers.remove(user.profile)
        profile.save()
        return Response(
            {"message": f"you're no longer following {profile.user.username}"},
            status=200,
        )


class SignUpView(APIView):
    """
    View to register a new user

    Args:
        username: str
        email: str
        password: str
    """

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class PostCreate(generics.CreateAPIView):
    """
    View to create a new post
    """

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user_profile=self.request.user.profile)


class PostList(generics.ListAPIView):
    """
    View to list all posts with filtering.
    """

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [
        filters.OrderingFilter,
        django_filters.rest_framework.DjangoFilterBackend,
    ]
    ordering_fields = ["created_at", "likes_count"]
    filterset_fields = ["user_profile", "created_at", "likes_count"]


class PostDetail(generics.RetrieveAPIView):
    """
    View to show a single post.
    """

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = "pk"


class PostDelete(generics.DestroyAPIView):
    """
    View to delete a single post.
    """

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = "pk"

    def delete(self, request, *args, **kwargs):
        post = self.get_object()
        if post.user_profile.user == request.user:
            return self.destroy(request, *args, **kwargs)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)
