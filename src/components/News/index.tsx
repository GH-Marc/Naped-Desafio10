import Link from 'next/link';

import styles from './styles.module.scss';

interface NewsProps {
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
}

export function News({ news_content, right_pannel_content }: NewsProps) {
  return (
    <div className={styles.news}>
      <div className={styles.news_container}>
        {news_content.map((content) => {
          return (
            <div key={content.news_content_id} className={styles.news_pannel}>
              <div 
                className={styles.news_image}
                style={{ backgroundImage: `linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(${content.news_content_image})`}}
              >
                <span>{content.news_content_tag}</span>
              </div>

              <div className={styles.news_content}>
                <h4>{content.news_content_title}</h4>
                <p>{content.news_content_description}</p>
                <span>{content.news_content_date}</span>
                <button>Ler notícia</button>
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.right_pannel_container}>
        <h2>Veja também</h2>

        <div className={styles.pannel_divider}></div>

        {right_pannel_content.map((content) => {
          return (
            <Link key={content.pannel_id} href="/news" passHref>
              <div
                className={styles.pannel_image}
                style={{ backgroundImage: `linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(${content.pannel_image})`}}
              >
                <span>{content.pannel_tag}</span>
                <p>{content.pannel_title}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
