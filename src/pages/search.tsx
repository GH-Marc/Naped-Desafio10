import Head from 'next/head';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';

import search from '../styles/pages/search.module.scss';

export default function Search() {
  return (
    <Layout>
      <Head>
        <title>Pesquisa | Naped</title>
      </Head>

      <Header />

      <div>
        <div className={search.search_image}>
          <div className={search.banner_content}>
            <h2>Animes</h2>
            <p>O Naped pode ser sua fonte de informações sobre <br/>
              o mundo nerd e outros assuntos relacionados.
            </p>
          </div>
        </div>

        <form className={search.search_input}>
          <input type="text" placeholder="Quer ajuda na procura? Pesquise aqui" />
          <img src="/images/search.png" alt="Lupa" />
        </form>
      </div>

      <div className={search.topics_pagination}>
        <div className={search.topics_image} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(../images/16.png)"}}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
          </p>
        </div>

        <div className={search.topics_image} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(../images/15.png)"}}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
          </p>
        </div>

        <div className={search.topics_image} style={{ backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(../images/17.png)"}}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.
          </p>
        </div>
      </div>

      <nav className={search.nav}>
        <ul className={search.pagination}>
          <li>
            <img src="./images/left-arrow.png" alt="Left arrow" />
          </li>

          <li>
            1
          </li>

          <li>
            2
          </li>

          <li>
            ...
          </li>
          
          {/* <li onClick={() => paginate(pageNumbers[0])} key={pageNumbers[0]}>
              {pageNumbers[0]}
          </li> 
          <li onClick={() => paginate(pageNumbers[1])} key={pageNumbers[1]}>
              {pageNumbers[1]}
          </li> 

          <li onClick={() => paginate(pageNumbers[2])} key={pageNumbers[3]}>
              ...
          </li>

          <li onClick={() => paginate(pageNumbers[8])} key={pageNumbers[8]}>
              {pageNumbers[8]}
          </li>
          
          <li onClick={() => paginate(pageNumbers[9])} key={pageNumbers[9]}>
              {pageNumbers[9]}
          </li> */}

          <li>
            <img src="./images/right-arrow.png" alt="Right Arrow" />
          </li>
        </ul>
      </nav>

      <Footer />
    </Layout>
  )
}
