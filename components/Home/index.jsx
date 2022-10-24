import React from 'react'
import Hero from './components/Hero';
import Innovative from './components/Innovative';
import classes from './Home.module.css';

function Home() {
  return (
    <div className={classes.container}>
        <Hero />
        <Innovative />
    </div>
  )
}

export default Home