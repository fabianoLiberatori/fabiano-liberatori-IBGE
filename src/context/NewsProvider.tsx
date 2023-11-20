
import { useEffect, useState } from "react";
import NewsContext from "./NewsContext";
import NewsApi from "../services/Apifetch";
import { NewsContextType } from "../types";

type ChildrenType = {
  children: React.ReactNode,
}

function NewsProvider({ children }: ChildrenType) {
  const [newsIBGE, setNewsIBGE] = useState<NewsContextType[]>([]);

  useEffect(() => {
    async function newsFetch() {
      if(newsIBGE.length === 0) {
        const data = await NewsApi();
        setNewsIBGE(data.items)

      }
    }
    console.log('loop');
  newsFetch();
  }, [newsIBGE])

  const values ={
    newsIBGE,

  }
  return (
    <NewsContext.Provider value={ values }>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider;