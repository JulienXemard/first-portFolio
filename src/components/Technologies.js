import React from 'react'
import { useSpring, animated } from 'react-spring'
import { SvgIcon } from './Icons'
import '../styles/main.scss'

const technicalSkills = ['Node.js', 'JavaScript', 'React.js', 'MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'trello', 'HTML', 'CSS', 'bulma', 'npm', 'Heroku', 'VScode']

const currentlyLearning = ['Python', 'Django', 'TypeScript', 'Netlify']

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function About() {

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

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
                      className="svg"
                      width={60}
                      height={60}
                      icon={icon}
                      primaryFill={'#41b4d3'}
                      secondaryFill={'#ffffff'}
                      backgroundFill={'#242323'}
                    />
                    <p className="tech-name">{icon}</p>
                  </div>
                ))}
              </div>
              <br /><br />
              <div className="intro-me">
                {/* <h2>About <span className="about">Me</span></h2> */}
                <h3><span className="hook-text">"Entrepreneur prior to</span><br />&emsp;&emsp;&emsp;&emsp;&emsp;
              Software Engineering."</h3><br />
                <p>Over the past 10 years, I evolved from Mid to Top <span className="hook-text">Management</span> positions until the creation of my own firm within the Retail industry. This experience allowed me to <span className="hook-text">develop</span> my abilities to set up the operational & financial clusters required to operate an SME.</p><br />
                <p>Fascinated by the digital impact in the Retail Industry amongst other subjects such as Neuralink, machine learning & AR, I joined GA to become a <span className="hook-text">Software Engineer.</span> This reconversion allows me to express my creativity & problem solving skills within an industry that will inevitably <span className="hook-text">shape the future.</span></p><br />
                <p>Determined learner, objectives driven and eager for <span className="hook-text">opportunities</span>, I'm looking to join a team where I can learn & <span className="hook-text"> develop my abilities</span>, whilst contributing to the company's success.</p><br />
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
                      className="svg"
                      width={60}
                      height={60}
                      icon={icon}
                      primaryFill={'#41b4d3'}
                      secondaryFill={'#ffffff'}
                      backgroundFill={'#242323'}
                    />
                    <p className="tech-name">{icon}</p>
                  </div>
                ))}
              </div>
              <div className="columns is-mobile is-multiline projects container-cards">
                <animated.div
                  className="card-one url1"
                  onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                  onMouseLeave={() => set({ xys: [0, 0, 1] })}
                  style={{ transform: props.xys.interpolate(trans) }}
                />
                <animated.div
                  className="card-two url2"
                  onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                  onMouseLeave={() => set({ xys: [0, 0, 1] })}
                  style={{ transform: props.xys.interpolate(trans) }}
                />
              </div>
              <div className="columns is-mobile is-multiline projects container-cards">
                <animated.div
                  className="card-three"
                  onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                  onMouseLeave={() => set({ xys: [0, 0, 1] })}
                  style={{ transform: props.xys.interpolate(trans) }}
                />
                <animated.div
                  className="card-four"
                  onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                  onMouseLeave={() => set({ xys: [0, 0, 1] })}
                  style={{ transform: props.xys.interpolate(trans) }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

