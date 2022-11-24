import styles from '../styles/components/footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>
        Feito com ♡ por Laylla Andrade, durante o projeto guiado no módulo de ReactJS da reprograma.
      </p>
    </footer>
  )
}