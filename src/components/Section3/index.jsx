import React from 'react'
import './section3.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Section3() {
  return (
    <div className='section3'>
        <div className='row'>
            <div className='sec3-left'>
                <h2>What our <span>Franchise</span><br /> Owner Say</h2>
                <p>Help build a healthier community while <br /> building yourself a healthier bank <br />account!</p>
                <button>contact us</button>
            </div>
            <div className='sec3-right'>
            <iframe className='sec3-video' width="600" height="350" src="https://www.youtube.com/embed/vIsHv6nTTSU?si=zH3faoEftUSrL0Kz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        
    </div>
  )
}

export default Section3