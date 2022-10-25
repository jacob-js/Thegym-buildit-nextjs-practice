import React from 'react'

function Hero() {
  return (
    <div className='flex gap-16 items-center justify-center'>
        <div className="w-2/4 flex flex-col relative">
            <img src="/img/about-h2.png" alt="" className="w-min" />
            <img src="/img/about-h1.png" alt="" className="w-min absolute -bottom-16 right-14 shadow-lg" />
        </div>
        <div className="flex flex-col gap-5 w-2/4">
            <div className="text-bluelight">About us</div>
            <div className="text-dark-text font-bold text-4xl">Owner and investor with a reputation</div>
            <div className="leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.</div>
        </div>
    </div>
  )
}

export default Hero