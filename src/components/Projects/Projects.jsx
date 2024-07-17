import React from 'react'
import styles from "./Projects.module.css"
import viberr from '../../assets/viberr.png'
import frshBrg from "../../assets/fresh-burger.png"
import hipster from "../../assets/hipsster.png"
import youtube from "../../assets/youtube.png"
import spotify from "../../assets/spotify.png"
import ProjectCard from '../../common/ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard desc={"Un clon funcional de Spotify"} pic={spotify} title={"Spotify Clone"} link={"http://localhost:5173/"} />
            <ProjectCard desc={"Un clon funcional de Youtube, usando su API"} pic={youtube} title={"YouTube Clone"} link={"http://localhost:5173/"} />
            <ProjectCard desc={"Un sitio perron"} pic={hipster} title={"Viberr"} link={"http://localhost:5173/"} />
            {/* <ProjectCard desc={"Un sitio perron"} pic={fit} title={"Viberr"} link={"http://localhost:5173/"} /> */}
        </div>
    </div>
  )
}

export default Projects