import React from 'react'
import styles from "./Skills.module.css"
import checkDark from "../../assets/checkmark-dark.svg"
import checkLight from "../../assets/checkmark-light.svg"
import { useTheme } from '../../common/ThemeContext'
import SkillList from '../../common/SkillList'
import { useTranslation } from 'react-i18next'

const Skills = () => {
    const {theme, toggleTheme} = useTheme();
    const [t, i18n] = useTranslation("global");
    const checkIcon = theme === "light" ? checkLight : checkDark;
  return (
    <section className={styles.container} id='skills'>
        <h1 className="sectionTitle">{t("skills.title")}</h1>
        <div className={styles.skillList}>
            <SkillList icon={checkIcon} skill={"HTML5"} />
            <SkillList icon={checkIcon} skill={"JAVASCRIPT"} />
            <SkillList icon={checkIcon} skill={"REACT"} />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList icon={checkIcon} skill={"CSS"} />
            <SkillList icon={checkIcon} skill={"TAILWIND CSS"} />
            <SkillList icon={checkIcon} skill={"SASS"} />
            <SkillList icon={checkIcon} skill={"VITE JS"} />
        </div>
    </section>
  )
}

export default Skills