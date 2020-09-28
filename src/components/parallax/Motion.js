import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import '../../styles/main.scss'

const slides = [
  { id: 0, url: 'https://i.imgur.com/plD3syj.png' },
  { id: 1, url: 'https://i.imgur.com/UMFrQ4F.png' },
  { id: 2, url: 'https://i.imgur.com/AtbKZVD.png' },
  { id: 3, url: 'https://i.imgur.com/TwGF1iI.png' },
]

const Motion = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 4000), [])
  return transitions.map(({ item, props, key }) => (
    <div className="container">
      <animated.div
        key={key}
        className="bg"
        style={{ ...props, backgroundImage: `url(${item.url}` }}
      />
    </div> 
  ))
}

export default Motion