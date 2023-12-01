import { useEffect, useContext, useState } from 'react';
import LatestCard from '../components/LatestCard';
import NewsCard from '../components/NewsCard';
import Placeholder from '../components/Placeholder';
import ReleaseCard from '../components/ReleaseCard';
import NewsContext from '../context/NewsContext';
import styles from './Home.module.css';

function Home() {
  const {
    dataIBGE,
    newsIBGE,
    setNewsIBGE,
    dataRelease,
    navPlace,
    setNavPlace,
    allFavorites,
    setDataRelease } = useContext<any>(NewsContext);
  const [inputFilter, setInputFilter] = useState<string>('');
  const [isGroup, setIsGroup] = useState(true);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('favorite') || '[]') === null) {
      localStorage.setItem('favorite', JSON.stringify([{
        id: '0',
        titulo: 'titulo_0',
        introducao: 'introducao_0',
        data_publicacao: 'data_publicacao_0',
        link: 'link_0',
        imagens: 'imagens_0',
      }]));
    }
  }, []);

  function setFilterByInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    const newsFilter = dataIBGE.filter((news: any) => news.tipo === 'Notícia');
    const newsRelease = dataIBGE.filter((news: any) => news.tipo === 'Release');
    const olderNews = newsFilter.filter((news: any) => news.id !== newsFilter[0].id);

    const textFilter = olderNews.filter((news: any) => (
      news.titulo.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    ));

    const releaseFilter = newsRelease.filter((news: any) => (
      news.titulo.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    ));
    setNewsIBGE(textFilter);
    setDataRelease(releaseFilter);
    setInputFilter(value);
  }

  function setGroup() {
    setIsGroup(!isGroup);
  }

if(dataIBGE.length === 0) return <h2 className={ styles.noresponse }>Carregando a responta dos dados do IBGE...</h2>

  return (
    <main className={ styles.mainresponse }>
      <LatestCard />
      <Placeholder
        setInputFilter={ setInputFilter }
        setGroup={ setGroup }
      />

      {
        navPlace.includes('Notícia')
        && <input
          type="text"
          value={ inputFilter }
          onChange={ (event) => setFilterByInput(event) }
          placeholder="Pesquisar por titulo"
          className={ styles.inputsearch }
        />
      }

      {
        navPlace.includes('Release')
        && <input
          type="text"
          value={ inputFilter }
          onChange={ (event) => setFilterByInput(event) }
          placeholder="Pesquisar por titulo"
          className={ styles.inputsearch }
        />
      }

      <section className={ styles.newscontainer }>

        {
          navPlace.includes('Mais recentes') && newsIBGE.slice(0, 9).map((news: any) => (
            <section
              key={ news.id }
              data-testid='card'
            >
              <NewsCard
                imagens={ news.imagens }
                id={ news.id }
                titulo={ news.titulo }
                introducao={ news.introducao }
                data_publicacao={ news.data_publicacao }
                link={ news.link }
                isGroup={ isGroup }
              />
            </section>
          ))
        }

        {
          navPlace.includes('Notícia') && newsIBGE.map((news: any) => (
            <section
              data-testid='card'
              key={ news.id }
            >
              <NewsCard
                imagens={ news.imagens }
                id={ news.id }
                titulo={ news.titulo }
                introducao={ news.introducao }
                data_publicacao={ news.data_publicacao }
                link={ news.link }
                isGroup={ isGroup }
              />
            </section>
          ))
        }

        {
          navPlace.includes('Release') && dataRelease.map((rele: any) => (
            <section
              data-testid='card'
              key={ rele.id }
            >
              <ReleaseCard
                id={ rele.id }
                imagens={ rele.imagens }
                titulo={ rele.titulo }
                introducao={ rele.introducao }
                data_publicacao={ rele.data_publicacao }
                link={ rele.link }
                isGroup={ isGroup }
              />
            </section>
          ))
        }

        {
          navPlace.includes('Favoritas') && allFavorites.map((news: any) => (
            <section
              data-testid='card'
              key={ news.id }
            >
              <NewsCard
                imagens={ news.imagens }
                id={ news.id }
                titulo={ news.titulo }
                introducao={ news.introducao }
                data_publicacao={ news.data_publicacao }
                link={ news.link }
                isGroup={ isGroup }
              />
            </section>
          ))
        }

        {
          navPlace.includes('Favoritas')
          && allFavorites.length === 0
          && <h2 className={ styles.nofavorite }>Sem favoritos marcados</h2>
        }

      </section>

      {
        navPlace.includes('Mais recentes')
          && <div
            onClick={ () => setNavPlace('Notícia') }
            className={ styles.divlink }
          >
            <span className={ styles.spanlink }>MAIS NOTÍCIAS</span>
          </div>
      }

    </main>

  );
}

export default Home;
