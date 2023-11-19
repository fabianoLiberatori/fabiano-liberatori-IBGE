
import { useEffect, useState } from "react";
import NewsContext from "./NewsContext";
import NewsApi from "../services/Apifetch";

type ChildrenType = {
  children: React.ReactNode,
}

function NewsProvider({ Children }: ChildrenType) {
  const [newsIBGE, setNewsIBGE] = useState();

  useEffect(() => {
    async function newsFetch() {
      if(newsIBGE.lenght !== 0) {
        setNewsIBGE(newsIBGE);

      }else{
        const data = await NewsApi();
        setNewsIBGE(data.items)
      }
    }
    console.log('loop');
  newsFetch();
  }, [newsIBGE])

  const values ={

  }
  return (
    <NewsContext.Provider value={ values }>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider;