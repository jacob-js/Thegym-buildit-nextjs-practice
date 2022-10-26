import React from 'react'

function TeamItem({teamer}) {
  return (
    <div className='bg-light drop-shadow-box rounded-md'>
        <img src={teamer.pic} alt="" />
        <div className="flex gap-1 flex-col p-5">
            <div className="font-bold text-dark-text">{teamer.name}</div>
            <div className="font-medium text-default">{teamer.job}</div>
        </div>
    </div>
  )
}

export default TeamItem