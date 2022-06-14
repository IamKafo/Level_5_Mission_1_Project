import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <div className="contactBackground">
            <div className="contactContainer">
                <div className="contactCard">
                    <h1>
                        Contact Us
                    </h1>
                    <form className='form'>
                        <input type="text"  name='name' placeholder='Name'/>
                        <input type="text"  name='Email' placeholder='Email'/>
                    </form>
                    <div className='contact-Button'>SUBMIT </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Contact