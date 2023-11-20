export type NewsIBGEType = [
  {
    id: string,
    tipo: string,
    titulo: string,
    introducao: string,
    data_puplicacao: string,
    produto_id: string,
    produtos: string,
    editorias: string,
    imagens: string,
    produtos_relacionados: string,
    destaque: boolean,
    link: string,
  },
];

export type NewsContextType = {
  newsIBGE: NewsIBGEType | []
}