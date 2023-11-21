import styles from './NewsCard.module.css'

function NewsCard(oneNews) {
  const {id, titulo, introducao, data_publicacao, link} = oneNews;
  
  return (
    <>
      <div className={styles.teste}>
        {titulo}
      </div>
      <div className={styles.teste}>
        {introducao}
      </div>
      <div className={styles.teste}>
        <span className={styles.teste}>{data_publicacao}</span><button>Leia a notícia aqui</button>
      </div>
      <div className={styles.checkFavorite}>
        <input type="checkbox" />
      </div>
    </>
  )
}

export default NewsCard;
