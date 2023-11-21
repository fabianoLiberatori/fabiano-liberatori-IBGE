import { useEffect, useContext } from "react";
import LatestCard from "../components/LatestCard";
import NewsCard from "../components/NewsCard";
import Placeholder from "../components/Placeholder";
import NewsContext from "../context/NewsContext";


function Home() {
  const { newsIBGE } = useContext(NewsContext);

useEffect(() => {
 console.log('loop home');
}, [newsIBGE]);

console.log(newsIBGE);


  
  return (
    <section>
      <LatestCard />
      {/* <img src={`https://agenciadenoticias.ibge.gov.br/${teste?.image_fulltext}`} alt="" /> */}
      <Placeholder />
      <NewsCard />
    </section>
    
  )
}

export default Home;
