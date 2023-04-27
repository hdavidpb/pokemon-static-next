import { useState } from "react";
import Image from "next/image";
import { NextPage, GetServerSideProps, GetStaticPaths } from "next";
import { MainLayout } from "@/components/layouts";
import { pokeApi } from "@/api";
import confetti from "canvas-confetti";

import { PokemonResponse, PokemonsListResponse } from "@/interfaces";
import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { localFavorites } from "@/utils";

interface Props {
  pokemon: PokemonResponse;
}

const PokemonByName: NextPage<Props> = ({ pokemon }: Props) => {
  const [isInFavorites, setIsInFavorites] = useState<boolean>(
    localFavorites.isFavoritePokemon({ id: pokemon.id, name: pokemon.name })
  );

  const onToogleFavorite = () => {
    if (!isInFavorites) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }

    localFavorites.toogleFavorites({ id: pokemon.id, name: pokemon.name });
    setIsInFavorites(!isInFavorites);
  };

  return (
    <MainLayout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ??
                  "/no-image-png"
                }
                alt={pokemon.name}
                width={100}
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!isInFavorites}
                onPress={onToogleFavorite}
              >
                <span>
                  {isInFavorites ? "En Favoritos" : "Guardar en favoritos"}
                </span>
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Row justify="space-around">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Row>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonsListResponse>(
    "/pokemon/?limit=151"
  );
  const { results } = data;

  return {
    paths: results.map((pokemon) => ({
      params: { pokemonName: pokemon.name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx;
  const { pokemonName } = params as { pokemonName: string };

  const { data } = await pokeApi.get<PokemonResponse>(
    `/pokemon/${pokemonName}`
  );
  const { id, name, sprites } = data;
  return {
    props: {
      pokemon: { id, name, sprites },
    },
  };
};

export default PokemonByName;
