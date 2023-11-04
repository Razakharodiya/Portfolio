import React, { useState } from 'react'
import Skills from './Skills'
import Projects from './Projects'
import './About.css'

const About = () => {

    const [showSkills, setShowSkills] = useState(false);
    const [showProjects, setShowProjects] = useState(false);

    const toggleSkills = () =>
    {
        setShowSkills(!showSkills)
        if(showProjects)
        {
            setShowProjects(false);
        }
    }

    const toggleProjects = () =>
    {
        setShowProjects(!showProjects);
        if(showSkills)
        {
            setShowSkills(false);
        }
    }

  return (
    <div className='about'>
        <h3 className='sub-title'>About Me</h3>
        <h5>Why Choose Me ?</h5>
        <img src={require ("../../../src/assets/about/bg-img.png")} alt=' ' className='about-img'/>
        <div className='about-container'>
            <div className='row'> 
                <div className='about-col-1'>
                    <img src={require ("../../../src/assets/about/IMG_7841.JPG")} 
                    alt=' ' />
                </div>
                <div className='about-col-2'>
                    <p className='introduction'>As a talented web developer, I specialize in designing and 
                        building modern, functional, and visually stunning websites. My skill set includes HTML
                        , CSS, Javascript, and other cutting-edge technologies. I am dedicated to creating 
                        seamless user experiences and delivering exceptional results for clients. With a keen 
                        eye for detail and a passion for web development, I am committed to bringing your online
                         vision to life. Let's work together to create websites that make an impact!</p>

                    <button className='btn btn-skill' onClick={toggleSkills}><span>Skills</span></button>
                    <button className='btn btn-project' onClick={toggleProjects}><span>Projects</span></button>

                    {showSkills && <Skills />}
                    {showProjects && <Projects />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About