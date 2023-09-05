import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './section5.scss'
import SliderStatic from './SliderStatic'

function Section5() {


  return (
    <div className='section5'>
        <div className="sec5-left">
          <img src="/images/img1.png" alt="" />
          {/* <SliderStatic /> */}
        </div>
        <div className="sec5-right" data-aos="fade-left" data-aos-once='true'>
            <div className='sec5-right-con'>
              <h3>
                A{" "}
                <span>
                  Modern <br /> Store
                </span>{" "}
                Design
              </h3>
              <p >Beautiful ambiance <br className='br-hidded'/>with luxury space. ISO <br className='br-hidded'/>certified</p>
              <button >Contact us</button>
            </div>
        
            <div className='sec5-right-con'>
              <h3>
                A{" "}
                <span>
                  Modern <br /> Store
                </span>{" "}
                Design
              </h3>
              <div>
                <p >Beautiful ambiance <br className='br-hidded'/>with luxury space. ISO <br className='br-hidded'/>certified</p>
                <button >Contact us</button>
              </div>
            </div>
        </div>
     
    </div>
  )
}

export default Section5