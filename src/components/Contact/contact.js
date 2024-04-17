import React, { useRef } from 'react'
import ethLottery from '../../assets/ethLotteryNew.png'
import ethTokenLogo from '../../assets/ethTokenLogo.png'
import ethNFTLogo from '../../assets/ethNFTLogo.png'
import stableCoinLogo from '../../assets/stableCoinLogo.png'
import fbIcon from '../../assets/facebook-icon.png'
import gitHubLogo from '../../assets/gitHubLogo.png'
import LinkedInLogo from '../../assets/LinkedInLogo.png'
import emailjs from '@emailjs/browser';
import resume from '../../assets/resumeDevIntern.pdf'
import resumeMarketing from '../../assets/tourMarketingResume2024.pdf'
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
        <h1 className='contactPageTitle'>Crypto Projects</h1>
        <p className='clientDesc'>
          I have created several blockchain projects that use smart contracts, verifiable random functions and decentralization to showcase my skills in the blockchain space.
        </p>
        <div className='clientImgs'>
          <a title="Smart Contract Lottery Github" href="https://github.com/DukeLurkin/foundry-smart-contract-lottery-f23">
            <img src={ethLottery} alt='Client' className='clientImg' />
          </a>
          <a title="Blockchain Our Token Github" href="https://github.com/DukeLurkin/OurToken">
            <img src={ethTokenLogo} alt='Client' className='clientImg' />
          </a>
          <a title="Mood NFT Github" href="https://github.com/DukeLurkin/foundry-nft-f23">
            <img src={ethNFTLogo} alt='Client' className='clientImg' />
          </a>
          <a  href="https://github.com/DukeLurkin/foundry-defi-stablecoin-f23">
            <img title="Stable Coin Github" src={stableCoinLogo} alt='Client' className='clientImg' />
          </a>
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
          <button title="Submit" type='submit' value='Send' onSubmit={sendEmail} className='submitBtn'>Submit</button>
          <div className='links'>            
            <a href="https://github.com/DukeLurkin">
              <img title="Github" src={gitHubLogo} alt='githubIcon' className='link' />
            </a>
            <a href="https://linkedin.com/in/lukas-durkin">
              <img title="LinkdIn" src={LinkedInLogo} alt='instagramIcon' className='link' />
            </a>
            <a href="https://facebook.com">
              <img title="Facebook" src={fbIcon} alt='facebookIcon' className='link' />
            </a>
          </div>
        </form>
        <h1 className='resumeHeader'>Resume</h1>
        <a href={resume}>
          <h3 className='downloadResume'>Web Developer Download</h3>
        </a>
        <a href={resumeMarketing}>
          <h3 className='downloadResumeMarketing'>Tour Marketing Download</h3>
        </a>
          <span className='resumeDesc'>Click the link above to download my resume</span>
      </div>
    </secton>
  );
}

export default Contact