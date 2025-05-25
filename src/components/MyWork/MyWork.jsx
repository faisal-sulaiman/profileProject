import React from 'react'
import './MyWork.css'
import mywork_data from './../../assets/mywork_data.js'
import arrow from './../../assets/arrow_icon.png'

const MyWork = () => {
  return (
    <div id='Mywork' className='mywork'>
      <div className="mywork-title">
        <h1>latest work</h1>
        <img src='' alt=''></img>

      </div>
      <div className="mywork-container">
       {mywork_data.map((work,index)=>{
        return <img key={index} src={work.w_img} alt='' />
       })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img  src={arrow} alt=''></img>
      </div>
      
    </div>
  )
}

export default MyWork
