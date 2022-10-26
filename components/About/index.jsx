import React from 'react'
import CallToAct from './components/Act'
import Business from './components/Business'
import Hero from './components/Hero'
import Team from './components/Team'

function About() {
  return (
    <div className=''>
        <Hero />
        <Business />
        <Team />
        <CallToAct />
    </div>
  )
}

export default About