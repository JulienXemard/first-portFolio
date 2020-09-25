import React from 'react'
import { SvgIcon } from './Icons'


const technicalSkills = ['Node.js', 'JavaScript', 'React.js', 'Python', 'MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'Django', 'HTML', 'CSS', 'bulma', 'npm', 'Heroku', 'VScode']

const currentlyLearning = ['TypeScript', 'Netlify']

function About() {

  return (
    <section className="section tech" id="tech">
      <div className="tech-content">
        <div className="columns">
          <div className="column is-one-third">
            <div>
              <h2>Currently Learning<span className="skills-text"></span></h2>
              <div className="columns is-mobile is-multiline">
                {currentlyLearning.map(icon => (
                  <div key={icon} className="column is-5 tech-logo">
                    <SvgIcon
                      width={66}
                      height={66}
                      icon={icon}
                      primaryFill={'#41b4d3'}
                      secondaryFill={'#ffffff'}
                      backgroundFill={'#242323'}
                    />
                    <p className="tech-name">{icon}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="column">
              <h2>Skills<span className="skills-text"></span></h2>
              <div className="columns is-mobile is-multiline">
                {technicalSkills.map(icon => (
                  <div key={icon} className="tech-logo">
                    <SvgIcon
                      width={66}
                      height={66}
                      icon={icon}
                      primaryFill={'#41b4d3'}
                      secondaryFill={'#ffffff'}
                      backgroundFill={'#242323'}
                    />
                    <p className="tech-name">{icon}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

