import React from 'react'

function Textarea({label, ...props}) {
  return (
    <div className='w-full'>
        <div className="text-default text-sm mb-2">{label}</div>
        <textarea type="text" className="outline-none border border-default p-3 rounded-[3px] bg-transparent w-full drop-shadow-md h-32" {...props} ></textarea>
    </div>
  )
}

export default Textarea