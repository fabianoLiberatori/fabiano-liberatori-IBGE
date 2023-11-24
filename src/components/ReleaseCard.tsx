import { Link } from 'react-router-dom';
import styles from './ReleaseCard.module.css';

function ReleaseCard(oneRelease) {
  const {titulo, introducao, data_publicacao, link} = oneRelease;

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

  console.log(diasPassados);
  

  return (
    <>
     <div className={ styles.titulo }>
        { titulo }
      </div>
      <div className={ styles.introducao }>
        { introducao }
      </div>
      <div className={ styles.divdata}>
        <span className={ styles.diastext }>{ diasPassados }</span>
        <Link to={ link } className={ styles.spanlink }>
          <span className={ styles.spanlink }>Leia mais aqui</span>
        </Link>
      </div>
        <hr />
    </>
  )
  
}

export default ReleaseCard;