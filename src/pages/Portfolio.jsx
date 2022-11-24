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
                    <div className={styles.cards}>
                        <h1>Primeiro Projeto</h1>
                        <img className={styles.cardImg} src={primeiroImg}/>
                        <p>Projeto muito especial para mim,feito apenas com html e css. Realizado na seleção do curso, foi minha porta de entrada no Reprograma</p>
                        <a className={styles.cardLink} href="https://ws3-laylla.netlify.app/" target="_blank">Ver projeto</a>
                    </div>
                    <div className={styles.cards}>
                        <h1>Projeto M de maravilhosa</h1>
                        <img className={styles.cardImg} src={maravilhosaImg}/>
                        <p>Projeto realizado no reprograma, utilizando html e css. Onde também foi adicionado media queries, para que o projeto se tornasse responsivo.</p>
                        <a className={styles.cardLink} href="https://projeto-laylla.netlify.app/" target="_blank">Ver projeto</a>
                    </div>
                    <div className={styles.cards}>
                        <h1>Projeto Netflix</h1>
                        <img className={styles.cardImg} src={netflixImg}/>
                        <p>Projeto que teve como base a criação de tela, que mostrasse protagonistas trans em series.</p>
                        <a className={styles.cardLink} href="https://projetonetflixx.netlify.app/" target="_blank">Ver projeto</a>
                    </div>
                </div>
            </div>
        </div>
    )
}