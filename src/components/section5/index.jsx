import React from 'react'
import './section5.scss'
import SliderStatic from './SliderStatic'

function Section5() {
  return (
    <div className='section5'>
        <div className="sec5-left">
          <SliderStatic />
            {/* <img src="/images/Rectangle 192.png" alt="background image"/> */}
        </div>
        <div className="sec5-right">
        <h3>
          A{" "}
          <span>
            Modern <br /> Store
          </span>{" "}
          Design
        </h3>
            <p>Beautiful ambiance <br className='br-hidded'/>with luxury space. ISO <br className='br-hidded'/>certified</p>
            <button>contact us</button>
        </div>
    </div>
  )
}

export default Section5