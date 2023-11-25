import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NewsCard.module.css';
import HeartBlack from '../images/HeartBlack.svg';
import HeartRed from '../images/HeartRed.svg';
import NewsContext from '../context/NewsContext';
import { PropNewsProp } from '../types';

function NewsCard(oneNews: PropNewsProp) {
  const { setAllFavorites } = useContext<any>(NewsContext);
  const { imagens, id, titulo, introducao, data_publicacao, link } = oneNews;
  const [isFavorite, setIsFavorite] = useState<string[]>([]);

  const strImg = JSON.parse(imagens);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite') || '[]');
    if (favorites !== null) {
      const favoritesId = favorites.map((ele: { id: string; }) => ele.id);
      setIsFavorite(favoritesId);
    }
  }, []);

  function dataConvert() {
    const data = new Date();

    const dataPassada = data_publicacao.slice(0, 10).split('/');
    const dataFormat = new Date(`${dataPassada[2]}-${dataPassada[1]}-${dataPassada[0]} `);

    const dataEmMilissegundos = Math.abs(data.getTime() - dataFormat.getTime());
    const diasDeDiferenca = Math.ceil(dataEmMilissegundos / (1000 * 60 * 60 * 24));

    if (diasDeDiferenca === 1) {
      return `${diasDeDiferenca} dia atrás`;
    }
    return `${diasDeDiferenca} dias atrás`;
  }

  const diasPassados = dataConvert();

  function setContextFavorite() {
    const favoriteStore = JSON.parse(localStorage.getItem('favorite') || '[]');
    const favoriteFilter = favoriteStore.filter((fav: { id: string; }) => fav.id !== favoriteStore[0].id);
    setAllFavorites(favoriteFilter);
  }

  function setLocalFavorite() {
    const favorites = JSON.parse(localStorage.getItem('favorite') || '[]');
    const favoritesId = favorites.map((ele: { id: string; }) => ele.id);
    if (favoritesId.includes(id)) {
      const reFavorite = favorites.filter((ele: { id: string; }) => ele.id !== id);
      localStorage.setItem('favorite', JSON.stringify(reFavorite));
      const favoritesId = reFavorite.map((ele: { id: string; }) => ele.id);
      setIsFavorite(favoritesId);
    }
    if (!favoritesId.includes(id)) {
      localStorage.setItem('favorite', JSON.stringify([...favorites, {
        id,
        titulo,
        introducao,
        data_publicacao,
        link,
        imagens,
      }]));
      setIsFavorite([...isFavorite, id]);
    }
    setContextFavorite();
  }

  return (
    <>
      <img
        src={ `https://agenciadenoticias.ibge.gov.br/${strImg.image_fulltext}` }
        alt="Foto do artigo"
        className={ styles.imgresponse }
      />
      <div className={ styles.titulo }>
        { titulo }
      </div>
      <div className={ styles.introducao }>
        { introducao }
      </div>
      <div className={ styles.divdata }>
        <span className={ styles.diastext }>{ diasPassados }</span>
        <Link to={ link } className={ styles.spanlink }>
          <span className={ styles.spanlink }>Leia a notícia aqui</span>
        </Link>
      </div>
      <hr />
      <div className={ styles.checkFavorite }>
        <label className={ styles.heartlabel }>
          <input
            hidden
            checked={ isFavorite.includes(id) }
            onChange={ setLocalFavorite }
            type="checkbox"
          />
          <img
            className={ styles.heartlabel }
            src={ isFavorite.includes(id) ? HeartRed : HeartBlack }
            alt="favoritar"
          />
        </label>
      </div>

    </>
  );
}

export default NewsCard;
