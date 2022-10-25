import React from 'react'
import Company from './components/Company';
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
    </div>
  )
}

export default Home