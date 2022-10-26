import React from 'react'

function Input({label, ...props}) {
  return (
    <div className='w-full'>
        <div className="text-default text-sm mb-2">{label}</div>
        <input type="text" className="h-10 outline-none border border-default px-3 rounded-[3px] bg-transparent w-full drop-shadow-md" {...props} />
    </div>
  )
}

export default Input