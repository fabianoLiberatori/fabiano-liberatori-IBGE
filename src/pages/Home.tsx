import { useEffect, useContext, useState } from "react";
import LatestCard from "../components/LatestCard";
import NewsCard from "../components/NewsCard";
import Placeholder from "../components/Placeholder";
import ReleaseCard from "../components/ReleaseCard";
import NewsContext from "../context/NewsContext";
import styles from './Home.module.css'


function Home() {
  const { newsIBGE, dataRelease, navPlace, setNavPlace } = useContext(NewsContext);


  useEffect(() => {
    if(JSON.parse(localStorage.getItem('favorite')) === null) {
      localStorage.setItem('favorite', JSON.stringify([{
        id: '0',
        titulo: 'titulo_0',
        introducao: 'introducao_0',
        data_publicacao: 'data_publicacao_0',
        link: 'link_0',
      }]))
    }
    console.log('loop home');
  }, [newsIBGE]);

  return (
    <section>
      <LatestCard />
      <Placeholder />
      <section className={ styles.newscontainer }>
        {navPlace.includes('Mais recentes') && newsIBGE.slice(0, 9).map((news) => (
          <article
            key={ news.id }
            className={ styles.newsCard }
          >
          <NewsCard
            id={ news.id }
            titulo={ news.titulo }
            introducao= {news.introducao }
            data_publicacao= { news.data_publicacao }
            link={news.link}
          />
          </article>
        ))}
        {navPlace.includes('Notícia') && newsIBGE.map((news) => (
          <article
            key={ news.id }
            className={ styles.newsCard }
          >
          <NewsCard
            id={ news.id }
            titulo={ news.titulo }
            introducao= {news.introducao }
            data_publicacao= { news.data_publicacao }
            link={news.link}
          />
          </article>
        ))}
         {navPlace.includes('Release') && dataRelease.map((rele) => (
          <article
            key={ rele.id }
            className={ styles.newsCard }
          >
          <ReleaseCard
            titulo={ rele.titulo }
            introducao= {rele.introducao }
            data_publicacao= { rele.data_publicacao }
            link={rele.link}
          />
          </article>
        ))}
      </section>
    
      {navPlace.includes('Mais recentes') &&
      <div
      onClick={ () => setNavPlace('Notícia')}
      className={ styles.divlink }
      >
      <span className={ styles.spanlink }>MAIS NOTÍCIAS</span>
      </div>
      }
    </section>
    
  )
}

export default Home;
