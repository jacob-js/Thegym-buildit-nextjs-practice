import React from 'react'
import Partners from '../../../Home/components/Company/components/Partners'
import Stats from './components/Stats'

function Business() {
  return (
    <div className='py-32 max-w-5xl mx-auto flex flex-col gap-16'>
        <Stats />
        <Partners />
    </div>
  )
}

export default Business