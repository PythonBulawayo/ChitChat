from django.test import TestCase
from core.models import Post
from accounts.models import CustomUser
from django.urls import reverse
from rest_framework import status


class PostsTestCase(TestCase):
    def setUp(self):
        self.user = CustomUser.objects.create(
            username="test_user",
            email="test_user@example.com",
            password="test_password",
        )
        self.post = Post.objects.create(
            user_profile=self.user.profile, body="This is a test post", likes_count=1
        )
        self.relative_profile_url = reverse(
            "api:profile-detail", kwargs={"pk": self.post.user_profile.id}
        )

    def test_post_creation(self):
        self.assertEqual(self.post.body, "This is a test post")
        self.assertEqual(self.post.user_profile, self.user.profile)
        self.assertEqual(self.post.likes_count, 1)

    def test_user_post_count(self):
        self.assertEqual(self.user.profile.posts.all().count(), 1)

    def test_post_detail_view(self):
        url = reverse("api:post-detail", kwargs={"pk": self.post.pk})
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json()["likes_count"], 1)
        self.assertContains(response, self.relative_profile_url)
        self.assertContains(response, "This is a test post")

    def test_post_list_view(self):
        url = reverse("api:posts-list")
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.json()), 1)

    def test_post_delete_view(self):
        url = reverse("api:post-delete", kwargs={"pk": self.post.pk})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

        self.client.force_login(self.user)
        response = self.client.delete(url)
        self.assertEqual(response.status_code, 204)

        self.assertEqual(Post.objects.all().count(), 0)
        self.assertEqual(self.user.profile.posts.all().count(), 0)

    def test_post_create_view(self):
        url = reverse("api:post-create")
        response = self.client.post(url, {"body": "This is another post"})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

        self.client.force_login(self.user)
        response = self.client.post(url, {"body": "This is another post"})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Post.objects.all().count(), 2)
        self.assertEqual(self.user.profile.posts.all().count(), 2)
        self.assertEqual(response.json()["body"], "This is another post")
        self.assertEqual(response.json()["likes_count"], 0)
        self.assertContains(
            response, self.relative_profile_url, status_code=status.HTTP_201_CREATED
        )

class APIRootTestCase(TestCase):
    def test_root_status_code(self):
        """
        Test APIRootView for status code 200.
        """
        url = reverse("api:api-root")
        response = self.client.get(url, HTTP_HOST="example.com")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Assert that the response isn't empty and contains links
        self.assertTrue(response.content)
