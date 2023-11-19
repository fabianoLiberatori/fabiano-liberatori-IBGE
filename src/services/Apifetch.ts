async function NewsApi() {
  const data = (await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100')).json();
  return data
}

export default NewsApi;