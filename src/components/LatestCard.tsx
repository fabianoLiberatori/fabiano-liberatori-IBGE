import { useContext, useEffect, useState } from "react";
import NewsContext from "../context/NewsContext";
import styles from './LatestCard.module.css';
import HeartBlack from '../images/HeartBlack.svg';
import HeartRed from '../images/HeartRed.svg';
import { Link } from "react-router-dom";

function LatestCard() {
  const { newLatest, imgLatest, dataLatest } = useContext(NewsContext);
  const { id, titulo, introducao, data_publicacao, link } = newLatest;
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
  
    const dataFormat = new Date(`${ dataLatest[2] }-${ dataLatest[1] }-${ dataLatest[0] } `)
  
    const dataEmMilissegundos = Math.abs(data.getTime() - dataFormat.getTime());
    const diasDeDiferenca = Math.ceil(dataEmMilissegundos / (1000 * 60 * 60 * 24));
  
    if(diasDeDiferenca === 1) {
      return `${ diasDeDiferenca } dia atrás`;
    } else {
      return `${ diasDeDiferenca } dias atrás`;
    }
  }

  const diasCorridos = dataConvert();

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
    <section className={ styles.sectcontainer }>
      <img
      src={`https://agenciadenoticias.ibge.gov.br/${imgLatest.image_fulltext}`} 
      alt="Foto da notícia mais recente"
      className={ styles.latestimg }
      />
      <article className={ styles.artcontainer }>
        <div>
          <div className={ styles.divtop }>
            <p>Notícia mais recente</p>
              <label>
                <img
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
              <p>{ diasCorridos }</p>
              <Link to={ link } className={ styles.spanlink }>
                <span className={ styles.spanlink }>Leia a notícia aqui</span>
              </Link>
          </div>
        </div>
          
      </article>
    </section>
  )
}

export default LatestCard;
