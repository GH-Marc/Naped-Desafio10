import styles from './styles.module.scss';

interface RecentNewsProps {
  recent_news_content: {
    recent_news_id: number;
    recent_news_tag: string;
    recent_news_image: string;
    recent_news_title: string;
  }[];
}

export function RecentNews({ recent_news_content }: RecentNewsProps) {
  return (
    <div className={styles.recent_news_container}>
      <h2>Notícias mais recentes</h2>

      <div className={styles.recent_news_divider}></div>

      <div className={styles.banners_container}>
        {recent_news_content.map((content) => {
          return (
            <div 
              key={content.recent_news_id}
              className={styles.recent_news_banner}
              style={{ backgroundImage: `linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(${content.recent_news_image})`}}
            >
              <span>{content.recent_news_tag}</span>
              <p>{content.recent_news_title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
