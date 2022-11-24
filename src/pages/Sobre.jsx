import { Header } from "../components/Header";
import sobreImg from '../assets/sobre.svg'

import styles from '../styles/components/pages/sobre.module.css'

export function Sobre() {
    return(
        <>
            <Header title="Sobre mim" image={sobreImg} />   
            <div className={styles.sobreContainer}>
                <div className={styles.sobreImagemContainer}>
                    <img className={styles.sobreImg} src='https://avatars.githubusercontent.com/u/109319620?s=400&u=bd7d953440abbd2f57355aebeb42ad2c09f55a9d&v=4%22' />
                </div>
                <div className={styles.sobreDescricaoContainer}>
                    <h2 className={styles.sobreTitulo}>Laylla Andrade, prazer!</h2>
                    <p className={styles.sobreDescricao}>
                        Tenho 26 anos, moro em Campina Grande -PB, formada em Direito desde 2019. Entusiasta
                        da tecnologia, encontrei no reprograma a oportunidade de migração de carreira, onde atualmente sou Aluna Front-end
                        da turma On20. 
                    </p>
                </div>
            </div>
        </>
    )
}