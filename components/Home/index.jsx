import React from 'react'
import Company from './components/Company';
import Hero from './components/Hero';
import Innovative from './components/Innovative';
import classes from './Home.module.css';

function Home() {
  return (
    <div className={classes.container}>
        <Hero />
        <Innovative />
        <Company />
    </div>
  )
}

export default Home