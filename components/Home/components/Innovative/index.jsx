import React from 'react';
import InnovativeItem from './components/Item';
import classes from './Innovative.module.css';

function Innovative() {
    const data = [
        {
            title: 'Featured Listing',
            iconUrl: '/icon/pen.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        },
        {
            title: 'Available Properties',
            iconUrl: '/icon/code.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        },
        {
            title: 'In the News',
            iconUrl: '/icon/notif.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        }
    ];

  return (
    <div className={classes.container}>
        <div className={classes.title}>Innovative Execution</div>
        <div className={classes.items}>
            {
                data.map((item, index) =>(
                    <InnovativeItem key={index} iconUrl={item.iconUrl} title={item.title} text={item.text} />
                ))
            }
        </div>
    </div>
  )
}

export default Innovative