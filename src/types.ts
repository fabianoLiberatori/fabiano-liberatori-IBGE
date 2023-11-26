export type NewsIBGEType = {
    id: string,
    tipo: string,
    titulo: string,
    introducao: string,
    data_publicacao: string,
    produto_id: string,
    produtos: string,
    editorias: string,
    imagens: string,
    produtos_relacionados: string,
    destaque: boolean,
    link: string,
  }[];

export type news = {
  id: string,
  tipo: string,
  titulo: string,
  introducao: string,
  data_publicacao: string,
  produto_id: string,
  produtos: string,
  editorias: string,
  imagens: string,
  produtos_relacionados: string,
  destaque: boolean,
  link: string,
}

export type NewLatestType = {
  imagens: string,
  id: string,
  titulo: string,
  introducao: string,
  data_publicacao: string,
  link: string,
};

export type PropNewsProp = {
  imagens: string,
  id: string,
  titulo: string,
  introducao: string,
  data_publicacao: string,
  link: string,
};

export type imgParseType = {
  float_fulltext: string,
  float_intro: string,
  image_fulltext: string,
  image_fulltext_alt: string,
  image_fulltext_caption: string,
  image_intro: string,
  image_intro_alt: string,
  image_intro_caption: string,
 };

export type ProviderType = {
  id: string;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: string;
  produtos: string;
  editorias: string;
  imagens: string;
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
};

export type textFilterType = {
  id: string;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: string;
  produtos: string;
  editorias: string;
  imagens: string;
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
}[];

export type favoriteType = [
  {
    id: string,
    titulo: string,
    introducao: string,
    data_publicacao: string,
    link: string,
    imagens: string,
  }
][];

export type NewsContextType = {
  dataIBGE: NewsIBGEType,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  newLatest: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imgLatest: any,
  dataLatest: NewsIBGEType,
  newsIBGE: NewsIBGEType,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setNewsIBGE: any,
  dataRelease: NewsIBGEType,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setDataRelease: any,
  navPlace: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setNavPlace: any,
  allFavorites: favoriteType,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setAllFavorites: any,
};
