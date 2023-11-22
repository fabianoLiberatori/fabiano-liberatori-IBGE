import { useContext, useEffect, useState } from "react";
import NewsContext from "../context/NewsContext";
import styles from './LatestCard.module.css';

function LatestCard() {
  const { newLatest, imgLatest } = useContext(NewsContext);
  const { data_publicacao, titulo, introducao } = newLatest;
  const [diasPassados, setDiasPassados] = useState('')
  
  useEffect(() => {
    function dataConvert() {
      const data = new Date();
  
      const dataPassada = data_publicacao.slice(0, 10).split('/');
      const dataFormat = new Date(`${ dataPassada[2] }-${ dataPassada[1] }-${ dataPassada[0] } `)
  
      const dataEmMilissegundos = Math.abs(data.getTime() - dataFormat.getTime());
      const diasDeDiferenca = Math.ceil(dataEmMilissegundos / (1000 * 60 * 60 * 24));
  
      if(diasDeDiferenca === 1) {
        setDiasPassados(`${ diasDeDiferenca } dia atrás`);
      } else {
        setDiasPassados(`${ diasDeDiferenca } dias atrás`);
      }
    }
    // quebrando no slice
    // dataConvert();
    console.log('loop latest');
  }, [newLatest]);
  console.log(diasPassados);

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
            <p>{data_publicacao}</p><button>Leia a notícia aqui</button>
          </div>
        </div>
          
      </article>
    </section>
  )
}

export default LatestCard;
