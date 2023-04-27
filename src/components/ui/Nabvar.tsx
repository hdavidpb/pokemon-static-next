import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";

import NextLink from "next/link";

export const Nabvar = () => {
  const { theme } = useTheme();

  return (
    <ul
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray300.value,
        margin: 0,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="pikachu"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref className="flex justify-center items-center">
        <>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3 style={{ margin: 0 }}>
            okémon
          </Text>
        </>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Text color="white">Favoritos</Text>
      </NextLink>
    </ul>
  );
};
