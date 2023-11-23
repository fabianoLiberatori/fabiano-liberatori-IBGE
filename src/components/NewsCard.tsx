import { useEffect, useState } from "react";
import styles from './NewsCard.module.css'
import HeartBlack from '../images/HeartBlack.svg';
import HeartRed from '../images/HeartRed.svg';
import { func } from "prop-types";

function NewsCard(oneNews) {
  const {id, titulo, introducao, data_publicacao, link} = oneNews;
  const [isFavorite, setIsFavorite] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite'));
    if(favorites !== null) {
      const favoritesId = favorites.map((ele) => ele.id)
      setIsFavorite(favoritesId);
    }
  }, []);
  
  function dataConvert() {
    const data = new Date();

    const dataPassada = data_publicacao.slice(0, 10).split('/');
    const dataFormat = new Date(`${ dataPassada[2] }-${ dataPassada[1] }-${ dataPassada[0] } `)

    const dataEmMilissegundos = Math.abs(data.getTime() - dataFormat.getTime());
    const diasDeDiferenca = Math.ceil(dataEmMilissegundos / (1000 * 60 * 60 * 24));

    if(diasDeDiferenca === 1) {
      return `${ diasDeDiferenca } dia atrás`
    } else {
      return `${ diasDeDiferenca } dias atrás`
    }
  }

  const diasPassados = dataConvert();

  function setLocalFavorite() {
    const favorites = JSON.parse(localStorage.getItem('favorite'));
    const favoritesId = favorites.map((ele) => ele.id);
    if(favoritesId.includes(id)){
      const reFavorite = favorites.filter((ele) => ele.id !== id);
      localStorage.setItem('favorite', JSON.stringify(reFavorite));
      const favoritesId = reFavorite.map((ele) => ele.id)
      setIsFavorite(favoritesId);
    } 
    if(!favoritesId.includes(id)){
      localStorage.setItem('favorite', JSON.stringify([...favorites, {
        id: id,
        titulo: titulo,
        introducao: introducao,
        data_publicacao: data_publicacao,
        link: link,
      }]))
      setIsFavorite([...isFavorite, id]);
    }
  }
  
  return (
    <>
      <div className={ styles.titulo }>
        { titulo }
      </div>
      <div className={ styles.introducao }>
        { introducao }
      </div>
      <div className={ styles.divdata}>
        <span className={ styles.diastext }>{ diasPassados }</span><span className={ styles.spanlink }>Leia a notícia aqui</span>
      </div>
        <hr />
        <div className={ styles.checkFavorite }>
          <label className={ styles.heartlabel }>
            <input
              hidden
              checked={ isFavorite.includes(id) }
              onChange={ setLocalFavorite }
              id="checkfavorite"
              type="checkbox"
            />
            <img
            className={ styles.heartlabel }
            src={ isFavorite.includes(id) ? HeartRed : HeartBlack }
            alt="favoritar" />
          </label> 
        </div>
        
    </>
  )
}

export default NewsCard;
