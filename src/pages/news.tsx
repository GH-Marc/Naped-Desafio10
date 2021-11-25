import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { RecentNews } from '../components/RecentNews';
import { api } from '../services/api';

import news from '../styles/pages/news.module.scss';

interface NewsProps {
  recent_news_content: {
    recent_news_id: number;
    recent_news_tag: string;
    recent_news_image: string;
    recent_news_title: string;
  }[];
}

export default function News({ recent_news_content }: NewsProps) {
  return (
    <Layout>
      <Head>
        <title>Notícias | Naped</title>
      </Head>

      <Header />

      <div className={news.news_container}>
        <div className={news.news_info}>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis neque sed odio.</h2>

          <p className={news.news_subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className={news.news_date}>00 de Julho de 2021</p>
        </div>

        <div className={news.news_banner}>
          <img src="./images/12.png" alt="Vidas" />
          <span>Lorem</span>
        </div>

        <div className={news.news_content}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.</p>

          <img src="./images/13.png" alt="Vidas" />

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.</p>
        </div>
      </div>

      <RecentNews recent_news_content={recent_news_content} />
      <Footer />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const recent_news_content_response = await api.get("recent_news_content");

  const recent_news_content = recent_news_content_response.data;

  return {
    props: {
      recent_news_content
    },
  };
};
