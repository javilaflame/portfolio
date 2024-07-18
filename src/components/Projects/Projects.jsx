import React from 'react'
import styles from "./Projects.module.css"
import youtube from "../../assets/youtube.png"
import spotify from "../../assets/spotify.png"
import gemini from "../../assets/gemini.png"
import ProjectCard from '../../common/ProjectCard'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div id='projects' className={styles.container}>
        <h1 className="sectionTitle">{t("projects.title")}</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard desc={t("projects.spotifyDesc")} pic={spotify} title={t("projects.spotify")} link={"https://spotify-clone-javi.netlify.app/"} />
            <ProjectCard desc={t("projects.youtubeDesc")} pic={youtube} title={t("projects.youtube")} link={"https://yt-clone-javi.netlify.app/"} />
            <ProjectCard desc={t("projects.geminiDesc")} pic={gemini} title={t("projects.gemini")} link={"https://gemini-clone-javi.netlify.app/"} />
        </div>
    </div>
  )
}

export default Projects