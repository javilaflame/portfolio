import React from 'react'
import styles from "./Projects.module.css"
import viberr from '../../assets/viberr.png'
import frshBrg from "../../assets/fresh-burger.png"
import hipster from "../../assets/hipsster.png"
import youtube from "../../assets/youtube.png"
import spotify from "../../assets/spotify.png"
import ProjectCard from '../../common/ProjectCard'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div id='projects' className={styles.container}>
        <h1 className="sectionTitle">{t("projects.title")}</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard desc={t("projects.spotifyDesc")} pic={spotify} title={t("projects.spotify")} link={"http://localhost:5173/"} />
            <ProjectCard desc={t("projects.youtubeDesc")} pic={youtube} title={t("projects.youtube")} link={"https://yt-clone-javi.netlify.app/"} />
        </div>
    </div>
  )
}

export default Projects