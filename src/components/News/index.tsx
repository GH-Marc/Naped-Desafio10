import styles from './styles.module.scss';

export function News() {
  return (
    <div className={styles.news}>
      <div className={styles.news_container}>

        {/* {news_content.map((content) => {
          <div key={content.news_content_id} className={styles.news_pannel}>
            <div className={styles.news_image}>
              <span>{content.news_content_tag}</span>
            </div>

            <div className={styles.news_content}>
              <h4>{content.news_content_title}</h4>
              <p>{content.news_content_description}</p>
              <span>{content.news_content_date}</span>
              <button>Ler notícia</button>
            </div>
          </div>
        })} */}
        <div className={styles.news_pannel}>
          <div className={styles.news_image} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(./images/4.png)" }}>
            <span>Lorem</span>
          </div>

          <div className={styles.news_content}>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
            <span>30/09/2021</span>
            <button>Ler notícia</button>
          </div>
        </div>

        <div className={styles.news_pannel}>
          <div className={styles.news_image} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(./images/5.png)" }}>
            <span>Lorem</span>
          </div>

          <div className={styles.news_content}>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
            <span>30/09/2021</span>
            <button>Ler notícia</button>
          </div>
        </div>

        <div className={styles.news_pannel}>
          <div className={styles.news_image} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(./images/6.png)" }}>
            <span>Lorem</span>
          </div>

          <div className={styles.news_content}>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
            <span>30/09/2021</span>
            <button>Ler notícia</button>
          </div>
        </div>

        <div className={styles.news_pannel}>
          <div className={styles.news_image} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(./images/7.png)" }}>
            <span>Lorem</span>
          </div>

          <div className={styles.news_content}>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
            <span>30/09/2021</span>
            <button>Ler notícia</button>
          </div>
        </div>

        <div className={styles.news_pannel}>
          <div className={styles.news_image} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(./images/8.png)" }}>
            <span>Lorem</span>
          </div>

          <div className={styles.news_content}>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
            <span>30/09/2021</span>
            <button>Ler notícia</button>
          </div>
        </div>
      </div>

      <div className={styles.right_pannel_container}>
        <h2>Lorem ipsum dolor</h2>

        <div className={styles.pannel_divier}></div>
        <div className={styles.pannel_image} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(/images/9.png)" }}>
          <span>Lorem</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
        </div>

        <div className={styles.pannel_image} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(/images/10.png)" }}>
          <span>Lorem</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
        </div>

        <div className={styles.pannel_image} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(/images/11.png)" }}>
          <span>Lorem</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
        </div>
      </div>
    </div>
  )
}
