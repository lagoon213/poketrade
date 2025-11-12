from django.urls import path
from .views import PokemonSeriesView

urlpatterns = [
    path("pokemon-series/", PokemonSeriesView.as_view(), name="pokemon-series"),
]
