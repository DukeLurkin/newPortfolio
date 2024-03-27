import React, { useRef } from 'react'
import walmart from '../../assets/walmart.png'
import facebook from '../../assets/facebook.png'
import adobe from '../../assets/adobe.png'
import microsoft from '../../assets/microsoft.png'
import fbIcon from '../../assets/facebook-icon.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import emailjs from '@emailjs/browser';
import './contact.css';

/*const YOUR_SERVICE_ID = "service_r2cyawm";
const YOUR_TEMPLATE_ID = "template_7aio8on";
const YOUR_PUBLIC_KEY = "Zn23lP2WFQ_ustBn3dEc5";*/

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r2cyawm', 'template_7aio8on', form.current, {
      publicKey: 'BGABnPorSyp9G2FwM',
    })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <secton id="contactPage">
      <div id='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientDesc'>
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with include:
        </p>
        <div className='clientImgs'>
          <img src={walmart} alt='Client' className='clientImg' />
          <img src={facebook} alt='Client' className='clientImg' />
          <img src={adobe} alt='Client' className='clientImg' />
          <img src={microsoft} alt='Client' className='clientImg' />
        </div>
      </div>
      <div id="contact">
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss
          any work opportunities
        </span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='from_name' />
          <input type='text' className='email' placeholder='Your Email' name='from_email' />
          <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
          <button type='submit' value='Send' onSubmit={sendEmail} className='submitBtn'>Submit</button>
          <div className='links'>
            <img src={fbIcon} alt='facebookIcon' className='link' />
            <img src={twitter} alt='twitterIcon' className='link' />
            <img src={instagram} alt='instagramIcon' className='link' />
            <img src={youtube} alt='youtubeIcon' className='link' />
          </div>
        </form>
      </div>
    </secton>
  );
}

export default Contact