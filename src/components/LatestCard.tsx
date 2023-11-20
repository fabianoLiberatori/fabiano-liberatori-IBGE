import styles from './LatestCard.module.css';

function LatestCard() {
  return (
    <section className={ styles.sectcontainer }>
      <img
      src={`https://agenciadenoticias.ibge.gov.br/images/agenciadenoticias/ibge/2023_11/Encerramento_HOME.jpg`} 
      alt="Foto da noticia mais recente"
      className={ styles.latestimg }
      />
      <article className={ styles.artcontainer }>
        <div className={ styles.divtop }>
           <p>Notícia mais recente</p><input type="checkbox" />
        </div>
        <div className={ styles.divtext }>
          <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Incidunt quo vel omnis perspiciatis? Aspernatur, dolore.</p>
        </div>
          <div className={ styles.divbottom }>
            <p>data</p><button>Leia a notícia aqui</button>
          </div>
      </article>
    </section>
  )
}

export default LatestCard;
