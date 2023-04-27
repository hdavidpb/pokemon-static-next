import { useEffect, useState } from "react";
import { MainLayout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { NextPage } from "next";
import { localFavorites } from "@/utils";
import { FavoritesPokemon } from "@/components/pokemon";
import { PokeFavorites } from "@/interfaces";

const Favorites: NextPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<PokeFavorites[]>(
    []
  );

  useEffect(() => setFavoritesPokemons(localFavorites.pokemons), []);

  return (
    <MainLayout title="Favoritos">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemon favoritesPokemons={favoritesPokemons} />
      )}
    </MainLayout>
  );
};

export default Favorites;
