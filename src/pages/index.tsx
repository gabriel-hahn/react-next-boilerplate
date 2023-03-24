import Head from "next/head";
import { GetServerSideProps } from "next";

import { Main } from "@/components/Main";

interface IHomeProps {
  userName: string;
}

export default function Home({ userName }: IHomeProps) {
  return (
    <>
      <Head>
        <title>NextJS Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main title={userName} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://api.github.com/users/gabriel-hahn");
  const data = await response.json();

  return {
    props: {
      userName: data.name,
    },
  };
};
