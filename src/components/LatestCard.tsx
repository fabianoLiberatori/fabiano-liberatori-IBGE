import { useContext, useEffect, useState } from "react";
import NewsContext from "../context/NewsContext";
import styles from './LatestCard.module.css';
import HeartBlack from '../images/HeartBlack.svg';
import HeartRed from '../images/HeartRed.svg';

function LatestCard() {
  const { newLatest, imgLatest, dataLatest } = useContext(NewsContext);
  const { titulo, introducao } = newLatest;

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
                <img src={ HeartBlack } alt="Desfavoritado" />
                <input
                  hidden
                  id="checkfavorite"
                  type="checkbox"
                />
              </label>  
          </div>
          <h2 className={ styles.titulotext }>{ titulo }</h2>
          <br />
          <p className={ styles.introducaotext }>{ introducao }</p>
          <br />
          <div className={ styles.divbottom }>
              <p>{ diasCorridos }</p><span className={ styles.spanlink }>Leia a notícia aqui</span>
          </div>
        </div>
          
      </article>
    </section>
  )
}

export default LatestCard;
