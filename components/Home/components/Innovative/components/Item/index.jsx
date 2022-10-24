import React from 'react'
import classes from './Item.module.css';

function InnovativeItem({iconUrl, title, text}) {
  return (
    <div className={classes.container}>
        <div className={classes.iconContainer}>
            <img src={iconUrl} alt="" />
        </div>
        <div className={classes.title}>{title}</div>
        <div className={classes.text}>{text}</div>
    </div>
  )
}

export default InnovativeItem