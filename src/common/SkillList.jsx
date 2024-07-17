import React from 'react'

const SkillList = ({icon, skill}) => {
  return (
    <span>
        <img src={icon} alt="" />
        <p>{skill}</p>
    </span>
  )
}

export default SkillList