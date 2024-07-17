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
import CV from "../../assets/JavierGarciaCurriculum.pdf"
import { useTheme } from '../../common/ThemeContext'

const Hero = () => {
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
          <h2>Frontend Developer</h2>
          <span>
            <a href="https://twitter.com/" target='_blank'><img src={twitterIcon} alt="" /></a>
            <a href="https://github.com/" target='_blank'><img src={githubIcon} alt="" /></a>
            <a href="https://instagram.com/" target='_blank'><img src={linkedinIcon} alt="" /></a>
          </span>
          <p className={styles.description}>El Javi, programa sitios web bien perrones XD</p>
          <a href={CV} download>
            <button className='hover'>Resume</button>
          </a>
        </div>
    </section>
  )
}

export default Hero