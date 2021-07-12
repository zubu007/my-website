import React from 'react'
import Footer from '../../Footer'
import './Contact.css'

function Contact() {
    return (
        <> 
            <div className='main-container-contacts'>
                
                <div className="contact-container">
                    <h1>Want to talk?</h1>
                    <div className="contact-p">
                    <p>Email: jubayerhossainahad@gmail.com</p>
                    <p>Mobile: +8801686378684</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/jubayer-hossain-8a5836190/">https://www.linkedin.com/in/jubayer-hossain-8a5836190/</a></p>
                    <p>Github: <a href="https://github.com/zubu007">https://github.com/zubu007</a></p>
                    </div>
                </div>
                
                
            </div>
            <Footer /> 
        </>
    )
}

export default Contact
