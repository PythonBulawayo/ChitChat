from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from accounts.models import CustomUser
from django.conf import settings


class LoginViewTestCase(TestCase):
    def setUp(self):
        LOGIN_URL = "api/v2/auth/login/"
        self.client = APIClient()
        self.active_user = CustomUser.objects.create_user(
            username="activeuser", password="password123"
        )
        self.active_user.is_active = True
        self.active_user.save()

        self.inactive_user = CustomUser.objects.create_user(
            username="inactiveuser", password="password123"
        )
        self.inactive_user.is_active = False
        self.inactive_user.save()

        self.url = LOGIN_URL

    def test_login_successful(self):
        response = self.client.post(
            self.url, {"username": "activeuser", "password": "password123"}
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("access", response.data)
        self.assertIn(settings.SIMPLE_JWT["AUTH_COOKIE"], response.cookies)

    def test_login_inactive_user(self):
        response = self.client.post(
            self.url, {"username": "inactiveuser", "password": "password123"}
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data, {"details": "This account is not active."})

    def test_login_invalid_credentials(self):
        response = self.client.post(
            self.url, {"username": "wronguser", "password": "wrongpassword"}
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(
            response.data, {"details": "Account with given credentials not found."}
        )

    def test_login_missing_fields(self):
        response = self.client.post(self.url, {"username": "activeuser"})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(
            response.data, {"details": "Account with given credentials not found."}
        )
