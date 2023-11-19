import { Placeholder } from "react-bootstrap";
import LatestCard from "../components/LatestCard";
import NewsCard from "../components/NewsCard";


function Home() {
  return (
    <section>
      <h1>Home</h1>
      <LatestCard />
      <Placeholder />
      <NewsCard />
    </section>
    
  )
}

export default Home;
