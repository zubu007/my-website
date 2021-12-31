import React from 'react'
import './Portfolio.css'

function Card(props) {
    return (
        <div className='card-container'>
            <img src={props.image} />
            <h1>{props.heading}</h1>
            <p>{props.para}</p>
            <div className="links">
                <a href={props.github_link}>Github</a>
                <a href={props.site_link}>Demo</a>
            </div>
        </div>
    )
}

export default Card
