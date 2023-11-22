import styles from './NewsCard.module.css'

function NewsCard(oneNews) {
  const {id, titulo, introducao, data_publicacao, link} = oneNews;
  
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
  
  
  return (
    <>
      <div className={ styles.titulo }>
        { titulo }
      </div>
      <div className={ styles.teste }>
        { introducao }
      </div>
      <div className={ styles.teste }>
        <span className={styles.teste}>{ diasPassados }</span><button>Leia a notícia aqui</button>
      </div>
      <div className={ styles.checkFavorite }>
        <input type="checkbox" />
      </div>
    </>
  )
}

export default NewsCard;
