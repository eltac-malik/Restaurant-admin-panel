import React from 'react'
import logo from '../../img/logo.png'
import '../Navbar/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='navs'>
            <div className="nav-img">
            <Link to='/'>  <img src={logo} alt=""/></Link>
            </div>
            <ul className='nav-ul'>
            <Link className=' nav-li link' to='/'><li className='nav-li link'>HOME</li></Link>
            <Link className=' nav-li link' to='/order'><li className='nav-li link'>CREATE ORDER</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
