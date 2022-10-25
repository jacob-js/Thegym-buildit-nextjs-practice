import React from 'react'
import ContactForm from './components/Form'
import ContactInfos from './components/Infos'

function Contact() {
  return (
    <div className='p-32 flex'>
        <ContactInfos />
        <ContactForm />
    </div>
  )
}

export default Contact