import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import '../styles/main.scss'

function About() {

  const ref = useRef([])
  const [items, set] = useState([])

  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#14b8e0' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#14b8e0' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: 'black' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Bonjour !', 'My Name is', 'Julien Xemard']), 2000))
    ref.current.push(setTimeout(() => set(['A Full Stack', 'Sofware Engineer']), 7000))
    ref.current.push(setTimeout(() => set(['Julien Xemard', 'A Full Stack', 'Sofware Engineer']), 14000))
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div className="intro-parallax">
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default About