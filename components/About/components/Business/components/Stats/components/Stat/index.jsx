import React from 'react'

function Stat({stat}) {
  return (
    <div className='flex items-center gap-8'>
        <div className="w-17.5 h-17.5 flex justify-center items-center bg-default">
            <img src={stat.iconUrl} alt="" />
        </div>
        <div className="flex flex-col">
            <div className="text-4xl text-dark-text font-bold"> {'>'}{stat.count}</div>
            <div className="text-default font-bold">Number</div>
        </div>
    </div>
  )
}

export default Stat