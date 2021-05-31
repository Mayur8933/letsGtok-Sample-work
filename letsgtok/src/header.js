import React from 'react'
import './css/header.css'
import letsgtok from './images/Transparent_letsGtok_logo.png'

const Header = () => {
    return(
        <div>
            <div className='head'>
                <img className='logo' src={letsgtok} alt=''></img>
                <div className='nav_options'>
                    <a className='active' href='https://letsgtok.com/' > About</a>
                    <a className='active' href='https://letsgtok.com/' > Blogs</a>
                    <a className='active' href='https://letsgtok.com/'> Careers</a>
                    <a className='active' href='https://letsgtok.com/' > Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Header
