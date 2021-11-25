import Link from 'next/link';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header_container}>
      <Link href="/">
        <h1>Naped</h1>
      </Link>

      <div>
        <ul className={styles.header_list}>
          <li className={styles.active}>
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
