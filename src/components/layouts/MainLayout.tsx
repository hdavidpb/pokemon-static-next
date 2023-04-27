import Head from "next/head";
import { Nabvar } from "../ui";

interface Props {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

export const MainLayout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title ?? "Pokémon App"}</title>
        <meta name="author" content="Hernan Plaza" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keyboards" content={`${title} , pokémon, poke`} />
      </Head>

      <Nabvar />

      <main style={{ padding: "0 20px" }}>{children}</main>
    </>
  );
};
