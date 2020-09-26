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
              <br /><br /><br /><br />
              <div className="intro-me">
              {/* <h2>About <span className="about">Me</span></h2> */}
              <h3><span className="hook-text">Entrepreneur prior</span><br />Sofware Engineering.</h3><br />
              <p>Over the past 10 years, I evolved from Mid to Top <span className="hook-text">Management</span> positions until the creation of my own firm within the Retail industry. This experience allowed me to <span className="hook-text">develop</span> my abilities to set up the operational & financial clusters required to operate an SME.</p><br />
              <p>Fascinated by the digital impact in the Retail Industry amongst other subjects such as Neuralink, machine learning & AR, I joined GA to become a <span className="hook-text">Software Engineer.</span> This reconversion allows me to express my creativity & problem solving skills within an industry that will inevitably <span className="hook-text">shape the future.</span></p><br />
              <p>Determined learner, objectives driven and eager for <span className="hook-text">opportunities</span>, I'm looking to join a team where I can learn and <span className="hook-text">develop my abilities</span>, whilst contributing to the company's success on various projects.</p><br />
            </div>
            </div>
          </div>
          <div>
            <div className="column">
              <h2>Comfortable<span className="skills-text"></span></h2>
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

