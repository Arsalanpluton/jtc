import React, { useState } from 'react'
import './section10.scss'
import Questions from './Questions'

function Section10() {
    
  return (
    <div className='section section10'>
        <h2>Find the answers to all of our most frequently asked questions.</h2>
        <Questions />
        <Questions />
        <Questions />
        <Questions />
    </div>
  )
}

export default Section10