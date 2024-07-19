import React from 'react'
import styles from "./Hero.module.css"
import heroImg from "../../assets/javi.png"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import twitterLight from "../../assets/twitter-light.svg"
import twitterDark from "../../assets/twitter-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import CV from "../../assets/JavierGarciaCV.pdf"
import { useTheme } from '../../common/ThemeContext'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const [t, i18n] = useTranslation("global");
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="PFP JAVI" />
            <img className={styles.colorMode} src={themeIcon} alt="" onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
          <h1>Javier<br />García</h1>
          <h2>{t("hero.subtitle")}</h2>
          <span>
            <a href="https://twitter.com/javilaflame" target='_blank'><img src={twitterIcon} alt="" /></a>
            <a href="https://github.com/javilaflame/" target='_blank'><img src={githubIcon} alt="" /></a>
            <a href="https://www.linkedin.com/in/javilaflame" target='_blank'><img src={linkedinIcon} alt="" /></a>
          </span>
          <p className={styles.description}>{t("hero.description")}</p>
          <a href={CV} download>
            <button className='hover'>{t("hero.buttonText")}</button>
          </a>
        </div>
    </section>
  )
}

export default Hero