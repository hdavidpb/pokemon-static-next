import { Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { PokemonImage } from "./FavoriteCardPokemon";
import { PokeFavorites } from "@/interfaces";

interface Props {
  favoritesPokemons: PokeFavorites[];
}

export const FavoritesPokemon: FC<Props> = ({ favoritesPokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritesPokemons.map((poke) => (
        <PokemonImage id={poke.id} key={poke.id} name={poke.name} />
      ))}
    </Grid.Container>
  );
};
