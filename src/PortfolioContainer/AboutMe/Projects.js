import React from 'react'
import './Project.css'

const Projects = () => {
    const projects = [
        {
            title : 'The Fit Club',
            description : 'front end website using react'
        },
        {
            title : 'Gold Price Prediction',
            description : 'website for predicting gold price using ML and Django'
        }
    ]
  return (
    <div className='project-container'>
        <ul>
            {projects.map((project,index)=>
            (
                <li key={index}>
                    <h4>{project.title}</h4>
                    <p className='project-info'>{project.description}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default Projects