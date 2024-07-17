import React from 'react'

const ProjectCard = ({pic, title, desc, link}) => {
  return (
    <a href={link} target='_blank'>
        <img src={pic} className='hover' alt="" />
        <h3>{title}</h3>
        <p>{desc}</p>
    </a>
  )
}

export default ProjectCard