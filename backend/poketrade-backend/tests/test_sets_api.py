import json
from django.urls import reverse
from rest_framework.test import APITestCase
from unittest.mock import patch, mock_open


class PokemonSeriesTests(APITestCase):

    @patch("builtins.open", new_callable=mock_open)
    @patch("os.path.exists", return_value=True)
    def test_pokemon_series_returns_correct_data(self, _, mock_file):
        # Fake JSON response
        fake_json = json.dumps([
            {
                "id": "sv1",
                "name": "Scarlet & Violet",
                "releaseDate": "2023/01/01",
                "images": {"logo": "http://example.com/logo.png"},
                "total": 198
            }
        ])

        mock_file.return_value.read.return_value = fake_json

        url = reverse("pokemon-series")

        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertIn("series", response.data)
        self.assertEqual(len(response.data["series"]), 1)

        series = response.data["series"][0]
        self.assertEqual(series["id"], "sv1")
        self.assertEqual(series["name"], "Scarlet & Violet")
        self.assertEqual(series["total_cards"], 198)
