import { Link } from 'react-router-dom';
import styles from './NewsCard.module.css';
import { PropNewsProp } from '../types';

function ReleaseCard(oneRelease: PropNewsProp) {
  const { imagens, titulo, introducao, data_publicacao, link, isGroup } = oneRelease;

  const strImg = JSON.parse(imagens);

  function dataConvert() {
    const data = new Date();

    const dataPassada = data_publicacao.slice(0, 10).split('/');
    const dataFormat = new Date(`${dataPassada[2]}-${dataPassada[1]}-${dataPassada[0]} `);

    const dataEmMilissegundos = Math.abs(data.getTime() - dataFormat.getTime());
    const diasDeDiferenca = Math.ceil(dataEmMilissegundos / (1000 * 60 * 60 * 24));

    if (diasDeDiferenca === 1) {
      return `${diasDeDiferenca} dia atrás`;
    }
    return `${diasDeDiferenca} dias atrás`;
  }

  const diasPassados = dataConvert();

  return (
    <article className={ isGroup ? styles.newsCard : styles.groupCard }>
      <img
        src={ `https://agenciadenoticias.ibge.gov.br/${strImg.image_fulltext}` }
        alt="Foto do artigo"
        className={ isGroup ? styles.imgresponse: styles.groupimg }
      />
        <div className={ isGroup ? styles.carditens : styles.groupitens }>
         <h3 className={ isGroup ?  styles.titulo : styles.grouptitulo }>
          { titulo }
          </h3>
          <div className={ isGroup ? styles.introducao : styles.groupintro }>
          { introducao }
          </div>
          <div className={ isGroup ? styles.divdata : styles.groupdivdata }>
            <span className={ styles.diastext }>{ diasPassados }</span>
            <Link to={ link } className={ styles.spanlink }>
              <span className={ styles.spanlink }>Leia mais aqui</span>
            </Link>
          </div>
          <hr className={ isGroup ? styles.hr : styles.grouphr }/>
        </div>
    </article>
  );
}

export default ReleaseCard;
