import React, { useState } from 'react'
import './navbar.scss'

function Navbar() {

  return (
    <nav>
        <div className='logo'>
            <img src="/images/Frame.png" alt="jtc-logo" />
        </div>
        <div className='menu'>
            <ul>
                <li>
                    <a href="#">Home</a>
                    <a href="#">About us</a>
                    <a href="#">Learn</a>
                    <a href="#">Clients</a>
                </li>
            </ul>
            <div className='signup'>
                <p>SIGNUP</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar