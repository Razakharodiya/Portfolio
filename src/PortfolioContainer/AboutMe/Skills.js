import React from 'react'
import './Skills.css'

const Skills = () => {
    const skill = ['JavaScript','React','Node.js','ML','Django']
  return (
    <div className='skill-container'>
        <ul>
            {skill.map((s,index)=>
            (
                <li key={index}>{s}</li>
            ))}
        </ul>
    </div>
  )
}

export default Skills