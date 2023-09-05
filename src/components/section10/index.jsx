import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './section10.scss'
import Questions from './Questions'

function Section10() {

  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])
    
  return (
    <div className='section section10'>
        <h2 data-aos="" data-aos-once='true'>Find the answers to all of our <br className='display-hidden'/> most frequently asked <br className='display-hidden'/>questions.</h2>
        <Questions title="What is Java Times Caffé?" para="We have Build our business from ground up using Blockchain technology has the potential to be used in a variety of ways in the coffee shop industry, and there are a few specific ways in which it could be used to create a successful coffee shop solution."/>
        <Questions title="What is Java Times Caffé?" para="We have Build our business from ground up using Blockchain technology has the potential to be used in a variety of ways in the coffee shop industry, and there are a few specific ways in which it could be used to create a successful coffee shop solution."/>
        <Questions title="What is Java Times Caffé?" para="We have Build our business from ground up using Blockchain technology has the potential to be used in a variety of ways in the coffee shop industry, and there are a few specific ways in which it could be used to create a successful coffee shop solution."/>
        <Questions title="What is Java Times Caffé?" para="We have Build our business from ground up using Blockchain technology has the potential to be used in a variety of ways in the coffee shop industry, and there are a few specific ways in which it could be used to create a successful coffee shop solution."/>
        
    </div>
  )
}

export default Section10