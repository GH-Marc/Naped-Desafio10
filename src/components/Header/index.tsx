import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header_container}>
      <h1>Naped</h1>

      <div>
        <ul className={styles.header_list}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Séries</a>
          </li>
          <li>
            <a href="#">Filmes</a>
          </li>
          <li>
            <a href="#">Animes</a>
          </li>
          <li>
            <a href="#">Games</a>
          </li>
        </ul>
      </div>

      <button>Minha conta</button>
    </header>
  )
}
