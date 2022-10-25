import React from 'react'
import About from './components/About'
import Partners from './components/Partners'

function Company() {
  return (
    <div className='bg-light py-16 px-32 mt-4'>
        <Partners />
        <About />
    </div>
  )
}

export default Company