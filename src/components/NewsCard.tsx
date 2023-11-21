function NewsCard(oneNews) {
  const {id, titulo, introducao, data_publicacao, link} = oneNews;
  
  return (
    <>
      <div>
        {titulo}
      </div>
      <div>
        {introducao}
      </div>
      <div>
        <span>{data_publicacao}</span><button>Leia a notícia aqui</button>
      </div>
      <div>
        <input type="checkbox" />
      </div>
    </>
  )
}

export default NewsCard;
