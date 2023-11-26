import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewsContext from '../context/NewsContext';
import styles from './LatestCard.module.css';
import HeartBlack from '../images/HeartBlack.svg';
import HeartRed from '../images/HeartRed.svg';

function LatestCard() {
  const { newLatest, imgLatest, dataLatest, setAllFavorites } = useContext(NewsContext);
  const { id, titulo, introducao, data_publicacao, link } = newLatest;
  console.log(data_publicacao);
  
  const [isFavorite, setIsFavorite] = useState<string[]>([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite') || '[]');
    if (favorites !== null) {
      const favoritesId = favorites.map((ele: {id: string}) => ele.id);
      setIsFavorite(favoritesId);
    }
  }, []);

  function dataConvert() {
    const data = new Date();

    const dataFormat = new Date(`${dataLatest[2]}-${dataLatest[1]}-${dataLatest[0]} `);

    const dataEmMilissegundos = Math.abs(data.getTime() - dataFormat.getTime());
    const diasDeDiferenca = Math.ceil(dataEmMilissegundos / (1000 * 60 * 60 * 24));

    if (diasDeDiferenca === 1) {
      return `${diasDeDiferenca} dia atrás`;
    }
    return `${diasDeDiferenca} dias atrás`;
  }

  const diasCorridos = dataConvert();

  function setContextFavorite() {
    const favoriteStore = JSON.parse(localStorage.getItem('favorite') || '[]');
    const favoriteFilter = favoriteStore.filter((fav: {id: string}) => fav.id !== '0');
    setAllFavorites(favoriteFilter);
  }

  function setLocalFavorite() {
    const favorites = JSON.parse(localStorage.getItem('favorite') || '[]');
    const favoritesId = favorites.map((ele: {id: string}) => ele.id);
    if (favoritesId.includes(id)) {
      const reFavorite = favorites.filter((ele: {id: string}) => ele.id !== id);
      localStorage.setItem('favorite', JSON.stringify(reFavorite));
      const favoritesId = reFavorite.map((ele: {id: string}) => ele.id);
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
    <section className={ styles.sectcontainer }>
      <img
        data-testid='imagem-latest'
        src={ `https://agenciadenoticias.ibge.gov.br/${imgLatest.image_fulltext}` }
        alt="Foto da notícia mais recente"
        className={ styles.latestimg }
      />
      <article className={ styles.artcontainer }>
        <div className={ styles.divtop }>
          <p>Notícia mais recente</p>
          <label className={ styles.labelresponse }>
            <img
              data-testid='imgheart'
              className={ styles.heart }
              src={ isFavorite.includes(id) ? HeartRed : HeartBlack }
              alt="Desfavoritado"
            />
            <input
              hidden
              type="checkbox"
              checked={ isFavorite.includes(id) }
              onChange={ setLocalFavorite }
            />
          </label>
        </div>
        <h2 className={ styles.titulotext }>{ titulo }</h2>
        <br />
        <p className={ styles.introducaotext }>{ introducao }</p>
        <br />
        <div className={ styles.divbottom }>
          <p data-testid='dias-corridos'>{ diasCorridos }</p>
          <Link to={ link } className={ styles.spanlink }>
            <span className={ styles.spanlink }>Leia a notícia aqui</span>
          </Link>
        </div>

      </article>
    </section>
  );
}

export default LatestCard;
