import { useContext } from "react";
import NewsContext from "../context/NewsContext";
import styles from './LatestCard.module.css';

function LatestCard() {
  const { newLatest, imgLatest } = useContext(NewsContext);
  const { data_publicacao, titulo, introducao } = newLatest;
  console.log(data_publicacao);


  return (
    <section className={ styles.sectcontainer }>
      <img
      src={`https://agenciadenoticias.ibge.gov.br/${imgLatest.image_fulltext}`} 
      alt="Foto da noticia mais recente"
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
            <p>{data_publicacao}</p><button>Leia a notícia aqui</button>
          </div>
        </div>
          
      </article>
    </section>
  )
}

export default LatestCard;
