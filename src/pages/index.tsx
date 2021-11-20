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
  news_content: {
    news_content_id: number;
    news_content_tag: string;
    news_content_title: string;
    news_content_image: string;
    news_content_description: string;
    news_content_date: string;
  }[];
  right_pannel_content: {
    pannel_id: number;
    pannel_tag: string;
    pannel_image: string;
    pannel_title: string;
  }[];
  recent_news_content: {
    recent_news_id: number;
    recent_news_tag: string;
    recent_news_image: string;
    recent_news_title: string;
  }[];
}

export default function Home({ 
  home_content,
  news_content,
  right_pannel_content,
  recent_news_content
}: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>Naped</title>
      </Head>

      <Header />
      <Main home_content={home_content} />
      <News 
        news_content={news_content}
        right_pannel_content={right_pannel_content}
      />
      <RecentNews recent_news_content={recent_news_content} />
      <Footer />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const home_content_response = await api.get("home_content");
  const news_content_response = await api.get("news_content");
  const right_pannel_content_response = await api.get("right_pannel_content");
  const recent_news_content_response = await api.get("recent_news_content");

  const home_content = home_content_response.data;
  const news_content = news_content_response.data;
  const right_pannel_content = right_pannel_content_response.data;
  const recent_news_content = recent_news_content_response.data;

  return {
    props: {
      home_content,
      news_content,
      right_pannel_content,
      recent_news_content
    },
  };
};
