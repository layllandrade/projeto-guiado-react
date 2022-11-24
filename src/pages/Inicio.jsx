import { Header } from '../components/Header'
import homeImg from '../assets/home.svg'
import codigoImg from '../assets/codigo.svg'
import contactImg from '../assets/contact.svg'
import vidaImg from '../assets/vida.svg'

import styles from '../styles/components/pages/inicio.module.css'



export function Inicio() {
  return (
    <>
      <Header title="Meu site pessoal" image={homeImg} />
      <div className={styles.sobreInicio}>
                <div className={styles.sobreVidaContainer}>
                    <img className={styles.sobreImg} src={vidaImg} />
                    <h2 className={styles.sobreTitulo}>Vida</h2>
                    <p className={styles.descricao}>Eu conto um pouquinho sobre mim, minha formação, a história da minha migração de carreira e meus projetos.</p>
                </div>
                <div className={styles.sobreCodigoContainer}>
                      <img className={styles.sobreImg} src={codigoImg} />
                    <h2 className={styles.sobreTitulo}>Código</h2>
                    <p className={styles.descricao}>Mostro meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação.</p>
                </div>
                <div className={styles.sobreContatoContainer}>
                <img className={styles.sobreImg} src={contactImg} />
                    <h2 className={styles.sobreTitulo}>Contatinho</h2>
                    <p className={styles.descricao}>Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.</p>
                </div>
            </div>
    </>
  )
}