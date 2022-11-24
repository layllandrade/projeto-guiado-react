import { Header } from "../components/Header";
import portfolioImg from '../assets/portfolio.svg'
import primeiroImg from '../assets/primeiro.png'
import maravilhosaImg from '../assets/maravilhosa.png'
import netflixImg from '../assets/netflix.png'

import styles from '../styles/components/pages/portfolio.module.css'


export function Portfolio() {
    return(
        <div>
        <Header title="Meus Projetinhos" image={portfolioImg} />
        <div className={styles.projetosFavoritos}>
            <h2 className={styles.tituloPrincipal}>Favoritos</h2>
        <div className={styles.containerCards}>
            <div className={styles.cards}></div>
                <h1></h1>
                <img className={styles.cardImg} src={primeiroImg}/>
                <p></p>
                <a className={styles.cardLink}></a>
            <div className={styles.cards}>
                <div className={styles.cards}></div>
                <h1></h1>
                <img className={styles.cardImg} src={maravilhosaImg}/>
                <p></p>
                <a className={styles.cardLink}></a>
            </div>
            <div className={styles.cards}>
                <div className={styles.cards}></div>
                <h1></h1>
                <img className={styles.cardImg} src={netflixImg}/>
                <p></p>
                <a className={styles.cardLink}></a>
            </div>
        </div>
        </div>
    </div>
    )
}