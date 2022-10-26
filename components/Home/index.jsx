import React from 'react'
import Company from './components/Company';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Innovative from './components/Innovative';
import Projects from './components/Projects';
import Socials from './components/Socials';
import classes from './Home.module.css';

function Home() {
  return (
    <div className={classes.container}>
        <Hero />
        <Innovative />
        <Company />
        <Projects />
        <Socials />
        <Contact />
    </div>
  )
}

export default Home