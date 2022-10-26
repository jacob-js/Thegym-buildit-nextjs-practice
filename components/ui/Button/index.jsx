import React from 'react';
import classes from './Button.module.css'

function Button({children}, props) {
  return (
    <button className={classes.btn} {...props}>{children}</button>
  )
}

export default Button