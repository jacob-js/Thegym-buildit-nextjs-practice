import React from 'react'
import Partners from '../../../Home/components/Company/components/Partners'
import Stats from './components/Stats'

function Business() {
  return (
    <div className='p-32 flex flex-col gap-16'>
        <Stats />
        <Partners />
    </div>
  )
}

export default Business