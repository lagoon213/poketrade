import json
from rest_framework.test import APITestCase
from unittest.mock import patch, mock_open


class CardsBySetTests(APITestCase):

    @patch("builtins.open", new_callable=mock_open)
    @patch("os.path.exists", return_value=True)
    def test_cards_by_set_returns_cards(self, _, mock_file):
        fake_json = json.dumps([
            {
                "id": "ex1",
                "name": "Charizard EX",
                "images": {"large": "http://example.com/large.png"}
            },
            {
                "id": "ex2",
                "name": "Pikachu",
                "images": {"small": "http://example.com/small.png"}
            }
        ])

        mock_file.return_value.read.return_value = fake_json

        url = "/cards/base-set/"   # jouw url heeft geen name → hardcoded
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertIn("cards", response.data)
        self.assertEqual(len(response.data["cards"]), 2)

        card1 = response.data["cards"][0]
        self.assertEqual(card1["id"], "ex1")
        self.assertEqual(card1["image"], "http://example.com/large.png")

    @patch("os.path.exists", return_value=False)
    def test_cards_by_set_not_found(self, _):
        url = "/cards/unknown-set/"
        response = self.client.get(url)

        self.assertEqual(response.status_code, 404)
        self.assertIn("error", response.data)
