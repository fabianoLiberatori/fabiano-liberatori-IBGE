import { useEffect, useState } from "react";
import LatestCard from "../components/LatestCard";
import NewsCard from "../components/NewsCard";
import Placeholder from "../components/Placeholder";
import NewsApi from "../services/Apifetch";


function Home() {
  const [teste, setTeste] = useState();


useEffect(() => {
   async function testete() {
    const data = await NewsApi();
    const extImg = data.items[0].imagens;
    const strImg = JSON.parse(extImg);
    // const splitImg1 = JSON.parse(strImg)
    // const splitImg2 = splitImg1.split('}').join('').split('\\').join('')
    setTeste(strImg);
  }
  testete();
}, [])

console.log(teste);


  
  return (
    <section>
      <img src={`https://agenciadenoticias.ibge.gov.br/${teste?.image_fulltext}`} alt="" />
      <h1>Home</h1>
      <LatestCard />
      <Placeholder />
      <NewsCard />
    </section>
    
  )
}

export default Home;
