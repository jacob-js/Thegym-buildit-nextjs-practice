import React from 'react'

function About() {
  return (
    <div className='flex mt-20 gap-14 items-center justify-center'>
        <div className="w-2/4 flex justify-end">
            <img src="/img/about.png" alt="" className='max-w-full' />
        </div>
        <div className="w-2/4 flex flex-col gap-5">
            <div className="text-bluelight">About us</div>
            <div className="text-default text-4xl font-bold">Owner and investor with a reputation</div>
            <div className="leading-8 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.</div>
            <button className="btn btn--primary btn--ps mt-5">Explore</button>
        </div>
    </div>
  )
}

export default About;