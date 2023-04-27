import { PokeFavorites } from "@/interfaces";

const toogleFavorites = (pokeFavorites: PokeFavorites) => {
  let favorites: PokeFavorites[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.some((poke) => poke.id === pokeFavorites.id)) {
    favorites = favorites.filter((poke) => poke.id !== pokeFavorites.id);
  } else {
    favorites.push(pokeFavorites);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const isFavoritePokemon = (pokeFavorite: PokeFavorites): boolean => {
  if (typeof window === "undefined") {
    return false;
  }
  const favorites: PokeFavorites[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.some((poke) => poke.id === pokeFavorite.id);
};

const pokemons = () => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export default { toogleFavorites, isFavoritePokemon, pokemons };
