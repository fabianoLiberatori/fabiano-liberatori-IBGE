import { useEffect, useState } from 'react';
import NewsContext from './NewsContext';
import NewsApi from '../services/Apifetch';
import { NewLatestType, NewsIBGEType, ProviderType, favoriteType, imgParseType } from '../types';

type ChildrenType = {
  children: React.ReactNode,
};

function NewsProvider({ children }: ChildrenType) {
  const [dataIBGE, setDataIBGE] = useState<NewsIBGEType>([]);
  const [newLatest, setNewLatest] = useState<NewLatestType>();
  const [imgLatest, setImgLatest] = useState<imgParseType>();
  const [dataLatest, setDataLatest] = useState<NewsIBGEType>([]);
  const [newsIBGE, setNewsIBGE] = useState([]);
  const [dataRelease, setDataRelease] = useState([]);
  const [navPlace, setNavPlace] = useState('Mais recentes');
  const [allFavorites, setAllFavorites] = useState<favoriteType>([]);

  useEffect(() => {
    async function newsFetch() {
      if (dataIBGE.length === 0) {
        const data = await NewsApi();
        setDataIBGE(data.items);

        const newsFilter = data.items.filter((news: ProviderType) => news.tipo === 'Notícia');

        setNewLatest(newsFilter[0]);
        const extImg = newsFilter[0].imagens;
        const strImg = JSON.parse(extImg);
        setImgLatest(strImg);
        const dataFormat = newsFilter[0].data_publicacao.slice(0, 10).split('/');
        setDataLatest(dataFormat);

        const olderNews = newsFilter.filter((news: ProviderType) => news.id !== newsFilter[0].id);
        setNewsIBGE(olderNews);

        const releaseFilter = data.items.filter((news: ProviderType) => news.tipo === 'Release');
        setDataRelease(releaseFilter);
      }
    }
    newsFetch();
  }, [dataIBGE.length]);

  return (
    <NewsContext.Provider value={{
      dataIBGE,
      newLatest,
      imgLatest,
      dataLatest,
      newsIBGE,
      setNewsIBGE,
      dataRelease,
      setDataRelease,
      navPlace,
      setNavPlace,
      allFavorites,
      setAllFavorites,
    }
    }>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
