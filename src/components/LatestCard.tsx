import { useContext, useEffect, useState } from "react";
import NewsContext from "../context/NewsContext";
import styles from './LatestCard.module.css';

function LatestCard() {
  const { newLatest, imgLatest, dataLatest } = useContext(NewsContext);
  const { data_publicacao, titulo, introducao } = newLatest;
  console.log(dataLatest);
  
  

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
        
        <div className={ styles.divtext }>
        <div className={ styles.divtop }>
           <p>Notícia mais recente</p><input type="checkbox" />
        </div>
          <h2>{titulo}</h2>
          <br />
        <p>{introducao}</p>
        <br />
        <div className={ styles.divbottom }>
            <p>{ diasCorridos }</p><button>Leia a notícia aqui</button>
          </div>
        </div>
          
      </article>
    </section>
  )
}

export default LatestCard;
