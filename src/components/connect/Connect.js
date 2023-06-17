import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './connect.css';

const Connect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_suxyid8', 'template_rsmjsoq', form.current, 'uQoA37ea8pMpcM2Py')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='connect' id='connect'>
     <div className="left-connect">
        <hr />
        <div>
            <span className='stroke-text'>Ready to </span><span>level up </span>
        </div>
        <div>
            <span>your body </span><span className='stroke-text'>with us?</span>
        </div>
     </div>
     <div className="right-connect">
        <form ref={form} action="#" onSubmit={sendEmail}>
            <label htmlFor="email">Email:</label>
            <input type="email" name='user_email' id='email' placeholder='Enter your email here' />
            <button className='btn'>Join now</button>
        </form>
     </div>
    </div>
  )
}

export default Connect;
