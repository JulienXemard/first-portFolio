import React from 'react'
import { SvgIcon } from './Icons'


const technicalSkills = ['Node.js', 'JavaScript', 'React.js', 'Python', 'MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'Django', 'HTML', 'CSS', 'bulma', 'npm', 'Heroku', 'VScode']

const currentlyLearning = ['TypeScript']

function About() {

  return (
    <section className="section about" id="about">
      <div className="about-content">
        <div className="columns">
          <div className="column is-one-third about-blurb">
            <div>
              <h2>Currently Learning <span className="blue-text">–</span></h2>
                {currentlyLearning.map(icon => (
                  <div key={icon} className="column is-3 tech-logo">
                    <SvgIcon
                      width={66}
                      height={66}
                      icon={icon}
                      primaryFill={'#41b4d3'}
                      secondaryFill={'#ffffff'}
                      backgroundFill={'#242323'}
                    />
                    <p className="">{icon}</p>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <div className="column">
              <h1>Skills <span className="blue-text">–</span></h1>
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
                    <p className="">{icon}</p>
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