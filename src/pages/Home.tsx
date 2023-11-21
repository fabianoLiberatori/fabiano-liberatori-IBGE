import { useEffect, useContext } from "react";
import LatestCard from "../components/LatestCard";
import NewsCard from "../components/NewsCard";
import Placeholder from "../components/Placeholder";
import NewsContext from "../context/NewsContext";


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
    {newsIBGE.map((news) => (
        <article key={news.id}>
           <NewsCard
        id={news.id}
        titulo={news.titulo}
        introducao={news.introducao}
        data_publicacao= {news.data_publicacao }
        link={news.link}
        />
        </article>
      ))}
      {/* <NewsCard /> */}
    </section>
    
  )
}

export default Home;
