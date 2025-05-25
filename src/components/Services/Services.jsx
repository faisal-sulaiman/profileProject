import React from 'react'
import './Services.css'
import them3 from './../../assets/them3.jpg'
import Services_data from './../../assets/Services_data'
// import arrow_icon from './../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id='Services' className='services'>
        <div className='services-title'>
            <h1>My Services</h1>
            <img src={them3} alt=''></img>

        </div>
        <div className="Services-container">
            {Services_data.map((servic,index)=>{
                return <div key={index} className='services-farmat'>
                    <h3>{servic.s_no}</h3>
                    <h2>{servic.s_name}</h2>
                    <p>{servic.s_desc}</p>
                    <div className='services-readmore'>
                        <p>Read More</p>
                        {/* <img src={arrow_icon} alt=''></img> */}

                    </div>
                </div>
            })}

        </div>
      
    </div>
  )
}

export default Services
