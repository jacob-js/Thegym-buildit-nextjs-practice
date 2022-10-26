import React from 'react'

function ContactInfos() {
  return (
    <div className='w-2/4'>
        <div className="h-full flex flex-col justify-between gap-5 w-3/4">
            <div className="flex flex-col gap-5">
                <div className="text-bluelight">Contact</div>
                <div className="text-dark-text font-bold text-4xl">Get In Touch</div>
            </div>
            <div className="flex flex-col mt-5 gap-7">
                <div className="flex gap-5 items-end">
                    <div className="bg-light w-17.5 h-17.5 rounded-md flex items-center justify-center">
                        <img src="/icon/phone.svg" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-dark-text">Tel</div>
                        <div className="text text-dark-text font-bold text-xl">708-790-0000</div>
                    </div>
                </div>
                <div className="flex gap-5 items-end">
                    <div className="bg-light w-17.5 h-17.5 rounded-md flex items-center justify-center">
                        <img src="/icon/email.svg" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-dark-text">Email</div>
                        <div className="text text-dark-text font-bold text-xl">sales@buildit.site</div>
                    </div>
                </div>
                <div className="flex gap-5 items-end">
                    <div className="bg-light w-17.5 h-17.5 rounded-md flex items-center justify-center">
                        <img src="/icon/email.svg" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-dark-text">Office</div>
                        <div className="text text-dark-text font-bold text-xl">60 Manor Station St.
    Fairport, NY 14450</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactInfos