import { useEffect, useContext } from "react";
import LatestCard from "../components/LatestCard";
import NewsCard from "../components/NewsCard";
import Placeholder from "../components/Placeholder";
import NewsContext from "../context/NewsContext";
import styles from './Home.module.css'


function Home() {
  const { newsIBGE, dataRelease } = useContext(NewsContext);

  useEffect(() => {
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
    <button>MAIS NOTÍCIAS</button>
    </section>
    
  )
}

export default Home;
