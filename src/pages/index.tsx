import Head from 'next/head';
import { GetStaticProps } from "next";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Main } from "../components/Main";
import { News } from "../components/News";
import { RecentNews } from "../components/RecentNews";

import { api } from '../services/api';

export interface HomeProps {
  home_content: {
    id: number;
    tag: string;
    description: string;
    image: string;
  }[];
}

export default function Home({ home_content }: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>Naped</title>
      </Head>

      <Header />
      <Main home_content={home_content} />
      <News />
      <RecentNews />
      <Footer />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("home_content");

  const home_content = response.data;

  return {
    props: {
      home_content,
    },
  };
};
