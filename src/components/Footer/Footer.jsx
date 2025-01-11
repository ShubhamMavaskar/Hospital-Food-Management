import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                {/* <img src={assets.logo} alt=''/> */}
                <h2>Heliverse Hospital Care</h2>
                <p>Provides Food to you at your bed.</p>
            </div>
            <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='' />
                <img src={assets.twitter_icon} alt='' />
                <img src={assets.linkedin_icon} alt='' />
            </div>
            <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
            <div className='footer-content-right'>
            <h2>Get In Touch</h2>
            <ul>
                <li>Phone: 1234567890</li>
                <li>Heliverse@contact.com</li>
            </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2025 @ Heliverse.com - All Right Reseved.</p>
        
    </div>
  )
}

export default Footer
