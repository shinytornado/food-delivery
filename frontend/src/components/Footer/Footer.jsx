import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="footer-logo" src={assets.logo_1} alt="" />
            <p>We prioritize fresh, fast delivery, so you can spend less time waiting and more time savoring your meal. Order today and discover a world of culinary delights at your fingertips!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-1234-567-890</li>
                <li>contact@nomnom.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
            © 2021 NomNom. All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
