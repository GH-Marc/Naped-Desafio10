import Link from 'next/link';

import { Header } from '../components/Header';
import { Layout } from '../components/Layout';

import page_not_found_container from '../styles/pages/404.module.scss';

export default () => (
  <Layout>
    <Header />

    <div className={page_not_found_container.not_found_page_container}>
      <aside className={page_not_found_container.left_side_container}>
        <h2>
        Tenho más notícias <br />
        para você!
        </h2>
        <p>
          A página que você está procurando pode ter sido removida ou está temporariamente indisponível.
        </p>

        <Link href='/'>
          Voltar a home.
        </Link>
      </aside>

      <aside className={page_not_found_container.right_side_container}>
        <img src="/images/404.svg" alt="404 image ilustration" />
        <p>
          Ups! Você chegou no espaço... <br />
          volte para o mundo nerd!
        </p>
      </aside>
    </div>
  </Layout>
)
