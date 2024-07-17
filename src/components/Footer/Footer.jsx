import React from 'react'
import styles from "./Footer.module.css"
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section id="footer" className={styles.container}>
        <p>&copy; 2024 Javier García<br />{t("footer.copyright")}</p>
    </section>
  )
}

export default Footer