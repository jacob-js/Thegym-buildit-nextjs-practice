import React from 'react'
import Stat from './components/Stat';

function Stats() {
  const data = [
    {
      iconUrl: '/icon/loc.svg',
      count: 200
    },
    {
      iconUrl: '/icon/house.svg',
      count: 70
    },
    {
      iconUrl: '/icon/hands.svg',
      count: 20
    }
  ];
  return (
    <div className='flex flex-col gap-20 items-center'>
        <div className="flex flex-col items-center gap-1">
            <div className="text-bluelight">Statistics</div>
            <div className="text-dark-text text-4xl font-bold">Development in numbers</div>
        </div>
        <div className="flex w-5/6 bg-light p-14 gap-16 drop-shadow-box">
          {
            data.map((stat, index) =>(
              <>
                <Stat stat={stat} key={index} />
                {
                  index !== data.length - 1 && <div className='h-20 border-l border-default'></div>
                }
              </>
            ))
          }
        </div>
    </div>
  )
}

export default Stats