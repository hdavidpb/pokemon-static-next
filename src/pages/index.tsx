import { NextPage, GetServerSideProps } from "next";
import { Grid } from "@nextui-org/react";

import { pokeApi } from "@/api";
import { MainLayout } from "../components/layouts";
import { PokemonsListResponse, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemon/PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout title="Listado de pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </Grid.Container>
    </MainLayout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getStaticProps: GetServerSideProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonsListResponse>(
    "/pokemon/?limit=151"
  );

  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg

  const pokemons = data.results.map((pokemon, idx) => ({
    name: pokemon.name,
    id: idx + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      idx + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
