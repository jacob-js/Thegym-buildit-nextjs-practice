import React from 'react'
import About from './components/About'
import Partners from './components/Partners'

function Company() {
  return (
    <div className='bg-light py-16 mt-4'>
        <div className="m-auto max-w-5xl">
          <Partners />
          <About />
        </div>
    </div>
  )
}

export default Company