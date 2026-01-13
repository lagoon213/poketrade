from rest_framework.test import APITestCase
from django.urls import reverse
from django.contrib.auth import get_user_model

User = get_user_model()


class RegisterApiTests(APITestCase):

    def test_register_creates_user(self):
        url = reverse("register")

        payload = {
            "username": "roksana",
            "email": "test@example.com",
            "password": "supersecret123"
        }

        response = self.client.post(url, payload, format="json")

        self.assertEqual(response.status_code, 201)

        self.assertTrue(User.objects.filter(username="roksana").exists())

        user = User.objects.get(username="roksana")

        self.assertNotIn("password", response.data)

        self.assertNotEqual(user.password, payload["password"])
        self.assertTrue(user.check_password(payload["password"]))

    def test_register_fails_when_missing_fields(self):
        url = reverse("register")

        payload = {
            "username": "noemail",
            "password": "test123"
        }

        response = self.client.post(url, payload, format="json")

        self.assertEqual(response.status_code, 400)
        self.assertIn("email", response.data)
