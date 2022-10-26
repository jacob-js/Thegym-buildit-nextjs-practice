import React from 'react';
import classes from './Hero.module.css';

function Hero() {
  return (
    <div className={classes.content}>
        <div className={classes.fig}></div>
        <div className="relative z-30 flex items-center justify-between gap-10 max-w-5xl">
            <div className={classes.heroIntro}>
                <div className={classes.heroText}>
                    <div className={classes.heroTitle}>Development company</div>
                    <div className={classes.desc}>Forward-thinking real estate developer, owner and investor with a reputation</div>
                </div>
                <div className={classes.heroBtns}>
                    <button className='btn btn--primary'>Services</button>
                    <button className="btn btn--light">About the company</button>      
                </div>
            </div>
            <div className={classes.images}>
                <div className={classes.images1}>
                    <img src="/img/h1.png" alt="" className={classes.img} />
                    <img src="/img/h2.png" alt="" className={classes.img} />
                    <img src="/img/h3.png" alt="" className={classes.img} />
                </div>
                <div className={classes.images2}>
                    <img src="/img/h4.png" alt="" className={classes.img} />
                    <img src="/img/h5.png" alt="" className={classes.img} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero