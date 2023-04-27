import { SmallPokemon } from "@/interfaces";
import { Grid, Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid key={pokemon.name} xs={6} sm={3} md={2} xl={1} onClick={handleClick}>
      <Card isHoverable isPressable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={pokemon.img}
            alt={pokemon.name}
            width={100}
            height={100}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>{`#${pokemon.id}`}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
