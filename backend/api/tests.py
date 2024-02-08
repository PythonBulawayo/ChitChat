from django.test import TestCase
from core.models import Post
from accounts.models import CustomUser
from django.urls import reverse


class PostsTestCase(TestCase):
    def setUp(self):
        CustomUser.objects.create(
            username="test_user",
            email="test_user@example.com",
            password="test_password",
        )

    def test_post_creation(self):
        user = CustomUser.objects.get(username="test_user")
        post = Post.objects.create(
            user_profile=user.profile, body="This is a test post"
        )
        self.assertEqual(post.body, "This is a test post")
        self.assertEqual(post.user_profile, user.profile)
        self.assertEqual(post.likes_count, 0)

    def test_post_list(self):
        user = CustomUser.objects.get(username="test_user")
        Post.objects.create(user_profile=user.profile, body="This is a test post")
        self.assertEqual(user.profile.posts.all().count(), 1)

    def test_post_detail_view(self):
        post = Post.objects.create(
            user_profile=CustomUser.objects.get(username="test_user").profile,
            body="This is a test post",
            likes_count=1,
        )
        url = reverse("api:post-detail", kwargs={"pk": post.pk})
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["likes_count"], 1)
        relative_profile_url = reverse(
            "api:profile-detail", kwargs={"pk": post.user_profile.id}
        )
        self.assertContains(response, relative_profile_url)
        self.assertContains(response, "This is a test post")
