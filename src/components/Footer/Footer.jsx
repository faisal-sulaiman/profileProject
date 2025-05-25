import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src={} alt="" /> */}
                <p>I am a frontend developer from. Pakistan with 4 years of experience </p>
            </div>
            <div className="footer top-right">
                <div className="footer-email-input">
                    <img src="" alt="" />
                    <input type="email" placeholder='enter your eamil' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom left">2025 .All rights reserved. </p>
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy services</p>
                <p>connect with me</p>
                
            </div>

        </div>
      
    </div>
  )
}

export default Footer
