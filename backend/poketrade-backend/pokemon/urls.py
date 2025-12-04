from django.urls import path
from .views import PokemonSeriesView, CardsBySetView

urlpatterns = [
    path("pokemon-series/", PokemonSeriesView.as_view(), name="pokemon-series"),
path("pokemon-series/", PokemonSeriesView.as_view()),
    path("cards/<str:set_id>/", CardsBySetView.as_view()),
]
