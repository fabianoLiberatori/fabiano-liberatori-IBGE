import { useEffect, useContext, useState } from "react";
import LatestCard from "../components/LatestCard";
import NewsCard from "../components/NewsCard";
import Placeholder from "../components/Placeholder";
import ReleaseCard from "../components/ReleaseCard";
import NewsContext from "../context/NewsContext";
import styles from './Home.module.css'


function Home() {
  const { newsIBGE, dataRelease, navPlace, setNavPlace } = useContext(NewsContext);
  const [favorites, setFavorites] = useState([]);


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
    const favoriteStore = JSON.parse(localStorage.getItem('favorite'));
    const favoriteFilter = favoriteStore.filter((fav) => fav.id !== favoriteStore[0].id)
    setFavorites(favoriteFilter);
    
    console.log('loop home');
  }, [navPlace]);

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
        {navPlace.includes('Favoritas') && favorites.length > 0 ? 
      favorites.map((news) => (
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
      )) :
      <h2 className={ styles.nofavorite }>Sem favoritos marcados</h2>
      }
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
