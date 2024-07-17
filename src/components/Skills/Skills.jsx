import React from 'react'
import styles from "./Skills.module.css"
import checkDark from "../../assets/checkmark-dark.svg"
import checkLight from "../../assets/checkmark-light.svg"
import { useTheme } from '../../common/ThemeContext'
import SkillList from '../../common/SkillList'

const Skills = () => {
    const {theme, toggleTheme} = useTheme();
    const checkIcon = theme === "light" ? checkLight : checkDark;
  return (
    <section className={styles.container} id='skills'>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList icon={checkIcon} skill={"HTML"} />
            <SkillList icon={checkIcon} skill={"JAVASCRIPT"} />
            <SkillList icon={checkIcon} skill={"REACT"} />
            <SkillList icon={checkIcon} skill={"CSS"} />
            <SkillList icon={checkIcon} skill={"TAILWIND CSS"} />
        </div>
        <hr />
    </section>
  )
}

export default Skills