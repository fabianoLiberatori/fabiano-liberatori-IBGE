import { useEffect, useContext } from "react";
import LatestCard from "../components/LatestCard";
import NewsCard from "../components/NewsCard";
import Placeholder from "../components/Placeholder";
import NewsContext from "../context/NewsContext";
import styles from './Home.module.css'


function Home() {
  const { newsIBGE, dataRelease } = useContext(NewsContext);
  // console.log(newsIBGE[0]);
  // console.log(dataRelease[0]);

useEffect(() => {
 console.log('loop home');
}, [newsIBGE]);

// console.log(newsIBGE);


  
  return (
    <section>
      <LatestCard />
      {/* <img src={`https://agenciadenoticias.ibge.gov.br/${teste?.image_fulltext}`} alt="" /> */}
      <Placeholder />
      <section className={styles.newscontainer}>
        {newsIBGE.map((news) => (
          <article
            key={news.id}
            className={styles.newsCard}
          >
          <NewsCard
            id={news.id}
            titulo={news.titulo}
            introducao={news.introducao}
            data_publicacao= {news.data_publicacao }
            link={news.link}
          />
          </article>
        ))}
      </section>
    
    </section>
    
  )
}

export default Home;
