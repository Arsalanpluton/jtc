import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './section6.scss'

function Section6() {

    useEffect(()=>{
        Aos.init({duration: 1000})
    },[])

  return (
    <div className='section6 section' data-aos="fade-down" data-aos-once='true'>
        <h2  >What <span>JAVA TIMES <br />CAFFE</span> Give you</h2>
        <p >
            We created a system that creates real value for our franchise partners and our customers.
        </p>
        <div className="cards-container">
            <div className="sec6-card" >
                <img src="/images/relatively.png" alt="relatively" />
                <h4>RELATIVELY LOW OPERATING COSTS</h4>
                <p>Small retail footprint, and low food and labor costs.</p>
            </div>
            <div className="sec6-card" data-aos="fade-up" data-aos-once='true'>
                <img src="/images/flexibility.png" alt="relatively" />
                <h4>FLEXIBLE BUSINESS MODEL</h4>
                <p>Upscale lifestyle centers, college towns and major city centers.</p>
            </div>
            <div className="sec6-card" data-aos="fade-up" data-aos-once='true'>
                <img src="/images/pos.png" alt="relatively" />
                <h4>POS</h4>
                <p>JTC provide Automated pos system</p>
            </div>
            <div className="sec6-card" data-aos="fade-up" data-aos-once='true'>
                <img src="/images/marketing.png" alt="relatively" />
                <h4>MARKETING</h4>
                <p>JTC provide marketing.</p>
            </div>
        </div>
    </div>
  )
}

export default Section6