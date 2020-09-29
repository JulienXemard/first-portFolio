import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import '../styles/main.scss'

function Projects() {


  const [flipped, set] = useState(false)

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  return (
    <section className="project-section">
      <div className="columns is-mobile is multiline" onClick={() => set(state => !state)}>
        <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
        <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
      </div>
    </section>
  )
}

export default Projects