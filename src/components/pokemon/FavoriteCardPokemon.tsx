import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";

export const PokemonImage = ({ id, name }: { id: number; name: string }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/name/${name}`);
  };
  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1} onClick={handleClick}>
      <Card isHoverable isPressable css={{ p: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={100}
          height={100}
        />
      </Card>
    </Grid>
  );
};
