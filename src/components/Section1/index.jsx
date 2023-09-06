
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './style.scss'; // Import your component's CSS
import VideoBackground from './VideoBackground'; // Import the VideoBackground component
import CardSlider from '../CardSlider';
import { AiFillMessage } from 'react-icons/ai';

function Section1() {

  const [activeForm, setActiveForm] = useState(false)

  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])

  return (
    <div className="section1">
      <VideoBackground />

      <div className="sec1-wrapper">
        <div className="main-content" data-aos="fade-down" data-aos-once='true'>
          <h1>
            OWN A <span className="clr-red">JAVA TIMES <br />CAFFE</span> FRANCHISE
          </h1>
          <p>Join one of the fastest growing <br /> cafe franchises in the world</p>
          <button className="btn-getstarted">GET STARTED</button>
        </div>

        <div className="carosal">
          <CardSlider />
        </div>
      </div>
      <div className="message-container">
        <AiFillMessage  className='message-icon'/>
      </div>
      <div className='sec1-form sec1-display-hidden'>
        <div className='form-letters' onClick={()=> setActiveForm(!activeForm)}>
          <p>F</p>
          <p>O</p>
          <p>R</p>
          <p>M</p>
        </div>
        <form action="#" className={`${activeForm ? "form-show" : "form-hidden"}`}>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Name'/>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email'/>
          <label htmlFor="number">Phone</label>
          <input type="number" placeholder='+52'/>
          <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  );
}

export default Section1;