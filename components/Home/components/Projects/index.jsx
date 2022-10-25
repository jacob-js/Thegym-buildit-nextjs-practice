import React from 'react'

function Projects() {
  return (
    <div className='py-16 px-32 mt-4 flex gap-10 items-center justify-center'>
        <div className="flex flex-col gap-5 w-2/4">
            <div className="text-bluelight">Available Properties</div>
            <div className="text-dark-text text-4xl font-bold">Featured Listing</div>
            <p className='leading-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.
            </p>
            <button className="btn btn--primary btn--ps mt-5">Explore</button>
        </div>
        <div className="flex gap-7 projects-pic">
            <div className="flex flex-col gap-7 items-end">
                <img src="/img/pro1.png" alt="" className='w-min' />
                <img src="/img/pro3.png" alt="" className='w-min' />
            </div>
            <div className="flex flex-col gap-7">
                <img src="/img/pro2.png" alt="" className='w-min' />
                <img src="/img/pro4.png" alt="" className='w-min' />
            </div>
        </div>
    </div>
  )
}

export default Projects