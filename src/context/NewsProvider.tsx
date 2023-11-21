
import { useEffect, useState } from "react";
import NewsContext from "./NewsContext";
import NewsApi from "../services/Apifetch";
import { NewsContextType } from "../types";

type ChildrenType = {
  children: React.ReactNode,
}

function NewsProvider({ children }: ChildrenType) {
  const [dataIBGE, setDataIBGE] = useState([]);
  const [newLatest, setNewLatest] = useState([]);
  const [imgLatest, setImgLatest] = useState([]);
  const [newsIBGE, setNewsIBGE] = useState([]);
  const [dataRelease, setDataRelease] = useState([]);

  useEffect(() => {
    async function newsFetch() {
      if(newsIBGE.length === 0) {
        const data = await NewsApi();
        setDataIBGE(data.items);
        setNewLatest({
          data_publicacao: data.items[0].data_publicacao,
          id: data.items[0].id,
          introducao: data.items[0].introducao,
          link: data.items[0].link,
          titulo: data.items[0].titulo,
        });
        const extImg = data.items[0].imagens;
        const strImg = JSON.parse(extImg);
        setImgLatest(strImg);
        const olderNews = data.items.filter((news) => news.id !== data.items[0].id && news.tipo === 'Notícia');
        setNewsIBGE(olderNews);
        
        const releaseNews = data.items.filter((news) => news.id !== data.items[0].id && news.tipo === 'Release');
        setDataRelease(releaseNews);
      }
    }
    console.log('loop');
  newsFetch();
  }, [])

  const values ={
    dataIBGE,
    newLatest,
    imgLatest,
    newsIBGE,
    dataRelease,
  }
  return (
    <NewsContext.Provider value={ values }>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider;