import React from 'react'
 import them_pat from './../../assets/them_pat.jpg'
import profile_pic from './../../assets/profile_img.jpg'
import './About.css'

const About = () => {
  return (
    <div id='About_me' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={them_pat} alt=''></img>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile_pic} alt=''></img>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>Helo, I am Faisal From kpk. I am a web developer</p>
                    <p>I complete Master from Unversity of Peshawar.i am a full stack web developer</p>

                </div>
                <div className='about-skills'> 
                <div className="about-skil"><p>HTML & CSS</p><hr style={{width:"50%"}}></hr></div>
                <div className="about-skil"><p>React js</p><hr style={{width:"70%"}}></hr></div>
                <div className="about-skil"><p>jawascript</p><hr style={{width:"60%"}}></hr></div>
                <div className="about-skil"><p>Php</p><hr style={{width:"50%"}}></hr></div>


               </div>

            </div>
        </div>
        <div className="about-achevements">
            <div className="about-achevement">
                <h1>4+</h1>
                <p>YEARS EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achevement">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achevement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>

        </div>
      
    </div>
  )
}

export default About
