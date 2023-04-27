import { Container ,Text,Image} from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
    <Container
    css={{
      display: "flex",
      flexDirection: "column",
      height: "calc(100vh - 100px)",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    }}
  >
    <Text h1 css={{ margin: 0 }}>
      No hay favoritos
    </Text>
    <Image
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      alt="Logo"
      height={150}
      width={150}
      css={{ opacity: 0.3, objectFit: "cover", margin: 0 }}
    />
  </Container>
  )
}
