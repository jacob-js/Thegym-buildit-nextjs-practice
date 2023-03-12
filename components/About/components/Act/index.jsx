import React from 'react'

function CallToAct() {
  return (
    <div className='bg-light -mb-10 pb-32'>
        <div className="max-w-5xl mx-auto">
          <div className="border-t py-16 border-b border-default flex justify-between items-center">
              <div className="text-4xl font-bold text-dark-text">Call us</div>
              <div className="flex gap-5">
                  <button className="btn btn--primary btn--ps">Call</button>
                  <button className="btn btn--light btn--ps">Email</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default CallToAct