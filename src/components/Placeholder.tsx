import styles from './Placeholder.module.css';
import group from '../images/Group273.svg';

function Placeholder() {
  return (
    <section className={ styles.placcontainer }>
      <div className={ styles.navlinks }>
        <span className={ styles.navlinks }>Mais recentes</span>
        <span className={ styles.navlinks }>Release</span>
        <span className={ styles.navlinks }>Notícia</span>
        <span className={ styles.navlinks }>Favoritas</span>
      </div>
        <img
        src={ group }
        alt='agrupamento'
        className={ styles.navgroup }
        />
    </section>
  )
}

export default Placeholder;