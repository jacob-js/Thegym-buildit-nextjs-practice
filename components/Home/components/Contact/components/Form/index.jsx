import React from 'react'
import Input from '../../../../../ui/Input'
import Textarea from '../../../../../ui/Textarea'

function ContactForm() {
  return (
    <div className='w-2/4 space-y-7 bg-light p-10 drop-shadow-2xl'>
        <div className="w-full flex justify-between">
            <div className="w-2/5">
                <Input label='Name' />
            </div>
            <div className="w-2/5">
                <Input label='Email' type="email" />
            </div>
        </div>
        <Input label='Subject' />
        <Textarea label='Message' />
        <button className="btn btn--primary btn--ps mt-5 btn--full">Send message</button>
    </div>
  )
}

export default ContactForm