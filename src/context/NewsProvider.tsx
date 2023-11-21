
import { useEffect, useState } from "react";
import NewsContext from "./NewsContext";
import NewsApi from "../services/Apifetch";
import { NewsContextType } from "../types";

type ChildrenType = {
  children: React.ReactNode,
}

function NewsProvider({ children }: ChildrenType) {
  const [newsIBGE, setNewsIBGE] = useState([]);
  const [newLatest, setnewLatest] = useState([]);
  const [imgLatest, setImgLatest] = useState([]);

  useEffect(() => {
    async function newsFetch() {
      if(newsIBGE.length === 0) {
        const data = await NewsApi();
        setnewLatest({
          data_publicacao: data.items[0].data_publicacao,
          id: data.items[0].id,
          introducao: data.items[0].introducao,
          link: data.items[0].link,
          titulo: data.items[0].titulo,

        });
        const extImg = data.items[0].imagens;
        const strImg = JSON.parse(extImg);
        setImgLatest(strImg);
        const olderNews = data.items.filter((news, index) => news[index] !== 0);
        setNewsIBGE(olderNews);
      }
    }
    console.log('loop');
  newsFetch();
  }, [newsIBGE])

  const values ={
    newsIBGE,
    newLatest,
    imgLatest,
  }
  return (
    <NewsContext.Provider value={ values }>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider;