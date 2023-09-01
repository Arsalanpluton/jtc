import React, { useState } from 'react'
import './navbar.scss'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true)


  return (
    <>
    <nav>
        <div className='logo'>
            <img src="/images/Frame.png" alt="jtc-logo" />
        </div>
        <div className='menu'>
            <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Learn</a>
                </li>
                <li>
                  <a href="#">Clients</a>
                </li>
          
            </ul>
            <div className='signup'>
                <p className='signup-hidden'>SIGNUP</p>
            </div>
        </div>
        {menuOpen ? <AiOutlineMenu className="menu-icon" onClick={()=> setMenuOpen(false)}/> : <AiOutlineClose className="menu-icon"  onClick={()=> setMenuOpen(true)}/>}
    </nav>

    <div className={`nav-down-menu ${menuOpen ? 'display-hidden' : ""}`}>
      <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Learn</a>
          </li>
          <li>
            <a href="#">Clients</a>
          </li>
          <li>
            <a href="#">SignUp</a>
          </li>
      </ul>
    </div>

    </> 
  )
}

export default Navbar