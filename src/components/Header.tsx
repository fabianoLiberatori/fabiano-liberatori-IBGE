import styles from './Header.module.css';
import logo from '../images/rectangleTrybe.png';

function Header() {
  return (
    <section className={ styles.hcontainer }>
      <img
        src={ logo }
        alt="logo da Trybe"
        className={ styles.logo }
      />
      <h1 className={ styles.h1 }>
        IBGE News
      </h1>
    </section>

  );
}

export default Header;

