import { useEffect, useState, useContext } from "react";
import LatestCard from "../components/LatestCard";
import NewsCard from "../components/NewsCard";
import Placeholder from "../components/Placeholder";
import NewsApi from "../services/Apifetch";
import NewsContext from "../context/NewsContext";


function Home() {
  const { newsIBGE } = useContext(NewsContext);
  const [teste, setTeste] = useState();


useEffect(() => {
   async function testete() {
    const data = await NewsApi();
    const extImg = data.items[0].imagens;
    const strImg = JSON.parse(extImg);
    setTeste(strImg);
  }
  testete();
}, [])

console.log(teste);
console.log(newsIBGE);


  
  return (
    <section>
      <LatestCard />
      {/* <img src={`https://agenciadenoticias.ibge.gov.br/${teste?.image_fulltext}`} alt="" /> */}
      <h1>Home</h1>
      <Placeholder />
      <NewsCard />
    </section>
    
  )
}

export default Home;
