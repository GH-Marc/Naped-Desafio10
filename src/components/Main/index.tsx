import styles from './styles.module.scss';

interface MainProps {
  home_content: {
    id: number;
    tag: string;
    description: string;
    image: string;
  }[];
}

export function Main({ home_content }: MainProps) {
  return (
    <main>
      <div className={styles.main_title}>
        <h1>Mundo nerd?<br />Naped!</h1>
        <p>O Naped pode ser sua fonte de informações sobre <br />
          o mundo nerd e outros assuntos relacionados.
        </p>
      </div>

      <section className={styles.banner_content}>
        <div className={styles.banner_principal} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(/images/home_content/1.png)" }}>
          <span>Séries</span>
          <p>O apocalipse zumbi aconteceu. A maior parte da população foi infectada por um vírus que os transformou em mortos-vivos. E agora, como será a vida na Terra?</p>
        </div>

        <div className={styles.side_banner}>
          {home_content.map((content) => {
            return (
              <div key={content.id} className={styles.side_content} style={{ backgroundImage: `linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(${content.image})`}}>
                <span>{content.tag}</span>
                <p>{content.description}</p>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
