import React from 'react'

function Socials() {
  return (
    <div className='py-16 bg-light px-32 mt-4 flex flex-col gap-3 items-center justify-center'>
        <div className="text-bluelight">Socials</div>
        <div className="text-dark-text text-4xl font-bold">On Instagram</div>
        <div className="grid gap-5 grid-cols-3 mt-7">
            <img src="/img/ins1.png" alt="" />
            <img src="/img/ins2.png" alt="" />
            <img src="/img/ins3.png" alt="" />
            <img src="/img/ins4.png" alt="" />
            <img src="/img/ins5.png" alt="" />
            <img src="/img/ins6.png" alt="" />
        </div>
    </div>
  )
}

export default Socials