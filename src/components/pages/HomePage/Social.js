import React from 'react'
import {FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'

function Social() {
    return (
        <div className="social">
            <a href="https://twitter.com/Zubayer64629386">
                <FaTwitter className='icon'/>
            </a>
            <a href="https://www.linkedin.com/in/jubayer-hossain-8a5836190/">
                <FaLinkedin className='icon'/>
            </a>
            <a href="https://github.com/zubu007">
                <FaGithub className='icon'/>
            </a>
        </div>
    )
}

export default Social
