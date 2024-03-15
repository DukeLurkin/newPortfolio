import React from 'react'
import walmart from '../../assets/walmart.png'
import facebook from '../../assets/facebook.png'
import adobe from '../../assets/adobe.png'
import microsoft from '../../assets/microsoft.png'
import fbIcon from '../../assets/facebook-icon.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import './contact.css';


const Contact = () => {
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
        <form className='contactForm'>
          <input type='text' className='name' placeholder='Your Name' />
          <input type='text' className='email' placeholder='Your Email' />
          <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>
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