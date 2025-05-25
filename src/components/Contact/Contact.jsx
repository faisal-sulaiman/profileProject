import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { faArrowRight ,faEnvelope,faPhone ,faLocation, faLocationDot} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "352eb909-7260-43a7-a3d5-2153a259cf31");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div>
        <div id='Contact' className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img></img>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let,s talk</h1>
                    <p>I am currently available to take a new project.
                         so feel free to send me a message about any thing that you want me
                          to work on. you can contact any time  </p>
                          <div className="contact-details">
                          <div className='detail'>
                              <FontAwesomeIcon icon={faEnvelope } /> {/* Use the icon */}
                              <p>faisal25@gmail.com</p>
                           </div>
                            <div className='detail'>
                              <FontAwesomeIcon icon={faPhone } /> {/* Use the icon */}<p>+92 3369659272</p>
                           </div>
                            <div className='detail'>
                              <FontAwesomeIcon icon={faLocationDot } /> {/* Use the icon */}<p>QAU Islamabd</p>
                           </div>
                           
                          </div>
                     </div>
                <form onSubmit={onSubmit} className="contact-right">
                  <label htmlFor="">Name </label>
                  <input type="text" placeholder='Enter your name' name='name'/>
                  <label htmlFor="">Your Email</label>
                  <input type="text" placeholder='Enter your Email ' name='Email' />
                  <label htmlFor="Write your message here"></label>
                  <textarea name="message" rows={8} placeholder='Enter your message here'></textarea>
                  <button type='submit' className="contact-submit">Submit now</button>
                </form>

            </div>
        </div>
      
    </div>
  )
}

export default Contact
