import React from 'react'
import './style.scss'
import CardSlider from '../CardSlider'

function Section1() {

  return (
    <div className='container'>
        <div className='main-content'>
            <h1>OWN A <span className='clr-red'>JAVA TIMES <br />CAFFE</span> FRANCHISE</h1>
            <p>Join one of the fastest growing <br /> caffe franchise in the world</p>
            <button className='btn-getstarted'>GET STARTED</button>
        </div>
        <div className='carosal'>
            <CardSlider />
        </div>
    </div>
  )
}

export default Section1