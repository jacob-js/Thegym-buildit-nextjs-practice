import React from 'react'
import ContactForm from './components/Form'
import ContactInfos from './components/Infos'

function Contact() {
  return (
    <div className='py-32 max-w-5xl mx-auto flex justify-center'>
        <ContactInfos />
        <ContactForm />
    </div>
  )
}

export default Contact