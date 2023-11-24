import { useContext } from "react";
import NewsContext from "../context/NewsContext";
import styles from './Placeholder.module.css';
import group from '../images/Group273.svg';

function Placeholder() {
  const { navPlace, setNavPlace } = useContext(NewsContext);
  
  function navToggle(navClicked){
    setNavPlace(navClicked);
  }
  
  return (
    <section className={ styles.placcontainer }>
      <div className={ styles.navdiv }>
        <span
        className={navPlace.includes('Mais recentes') ?
        styles.navtext :
        styles.navlinks }
        onClick={ () => navToggle('Mais recentes') }
        >
          Mais recentes
        </span>
        <span
        className={navPlace.includes('Release') ?
        styles.navtext :
        styles.navlinks }
        onClick={ () => navToggle('Release') }
        >
          Release
        </span>
        <span
         className={navPlace.includes('Notícia') ?
         styles.navtext :
         styles.navlinks }
        onClick={ () => navToggle('Notícia') }
        >
          Notícia
        </span>
        <span
         className={navPlace.includes('Favoritas') ?
         styles.navtext :
         styles.navlinks }
        onClick={ () => navToggle('Favoritas') }
        >
          Favoritas
        </span>
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