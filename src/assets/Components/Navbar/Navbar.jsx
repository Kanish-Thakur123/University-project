import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../../assets/logo.png'
import { Link, ScrollLink } from 'react-scroll';
import menu from '../../../assets/menu-icon.png'

function Navbar() {
    const[sticky,setsticky]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
window.scrollY > 50 ? setsticky(true):setsticky(false)
        })
    },[])

    const [mobilemenu,setmobilemenu]=useState(false);
    const togglemenu=()=>{
        mobilemenu? setmobilemenu(false):setmobilemenu(true);
    }
    return (
        <nav className={`container ${sticky? 'dark-nav':''} `}>
            <img src={logo} alt="" className='logo' />
            <ul className={mobilemenu?'':'mobile-menu'}>
            <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="programs" smooth={true} offset={-250} duration={500}>Programs</Link></li>
            <li><Link to="about" smooth={true} offset={-100} duration={500}>About</Link></li>
            <li><Link to="campus" smooth={true} offset={-250} duration={500}>Campus</Link></li>
            <li><Link to="testimonial" smooth={true} offset={-250} duration={500}>Testimonial</Link></li>
            <li><Link to="testimonial" smooth={true} offset={420}duration={500}><button className='btn'>Contact us</button></Link></li>
            </ul>
            <img src={menu}  alt="" className="menu" onClick={togglemenu} />
        </nav>
    )
}

export default Navbar
