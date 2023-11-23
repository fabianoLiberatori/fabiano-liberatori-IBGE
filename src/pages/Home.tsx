import { useEffect, useContext } from "react";
import LatestCard from "../components/LatestCard";
import NewsCard from "../components/NewsCard";
import Placeholder from "../components/Placeholder";
import NewsContext from "../context/NewsContext";
import styles from './Home.module.css'


function Home() {
  const { newsIBGE, dataRelease } = useContext(NewsContext);


  useEffect(() => {
    if(JSON.parse(localStorage.getItem('favorite')) === null) {
      localStorage.setItem('favorite', JSON.stringify([{
        id: '1',
        titulo: 'titulo_1',
        introducao: 'introducao_1',
        data_publicacao: 'data_publicacao_1',
        link: 'link_1',
      }]))
    }
    console.log('loop home');
  }, [newsIBGE]);

  return (
    <section>
      <LatestCard />
      <Placeholder />
      <section className={ styles.newscontainer }>
        { newsIBGE.slice(0, 9).map((news) => (
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
      </section>
    <div className={ styles.divlink }>
      <span className={ styles.spanlink }>MAIS NOTÍCIAS</span>
    </div>
    </section>
    
  )
}

export default Home;
