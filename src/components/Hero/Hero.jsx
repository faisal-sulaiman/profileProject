import React from 'react'
import './Hero.css'
import profie_pic from './../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='Home' className='hero'>
        <img src={profie_pic}></img>
        <h1>Helo, I am Faisal From kpk. I am a web developer</h1>
        <p>I complete Master from Unversity of Peshawar.i am a full stack web developer</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#Contact'>connect with me</AnchorLink></div>
            <div className='hero-resume'>my resume</div>

        </div>
      
    </div>
  )
}

export default Hero
