import styles from './styles.module.scss';

export function RecentNews() {
  return (
    <div className={styles.recent_news_container}>
      <h2>Notícias mais recentes</h2>
      <div className={styles.recent_news_divider}></div>

      <div className={styles.banners_container}>
        <div className={styles.recent_news_banner} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(./images/16.png);"}}>
          <span>Lorem</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
        </div>

        <div className={styles.recent_news_banner} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(./images/18.png);"}}>
          <span>Lorem</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
        </div>

        <div className={styles.recent_news_banner} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(./images/21.png);"}}>
          <span>Lorem</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
        </div>

        <div className={styles.recent_news_banner} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(./images/20.png);"}}>
          <span>Lorem</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
        </div>

        <div className={styles.recent_news_banner} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(./images/22.png);"}}>
          <span>Lorem</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
        </div>

        <div className={styles.recent_news_banner} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(./images/19.png)"}}>
          <span>Lorem</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
        </div>
      </div>
    </div>
  )
}
