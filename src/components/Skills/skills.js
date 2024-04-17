import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import ethRainbow from '../../assets/ethRainbow.png';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillsTitle'>My Skills</span>
      <span className='skillsDesc'>I possess a diverse set of abilities that I leverage to craft contemporary and adaptable websites, along with mobile applications.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt="UIDesign" className='skillBarImg' />
          <div className='skillBarText'>
            <h2 id="h2skillBarText">UI/UX Design</h2>
            <p>Designs with user experience and ease of use in mind</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt="WebDesign" className='skillBarImg' />
          <div className='skillBarText'>
            <h2 id="h2skillBarText">Web Design</h2>
            <p>Practical designs that fit any online needs</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt="AppDesign" className='skillBarImg' />
          <div className='skillBarText'>
            <h2 id="h2skillBarText">App Design</h2>
            <p>Desktop and mobile apps that work for you</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={ethRainbow} alt="AppDesign" className='skillBarImgEth' />
          <div className='skillBarText'>
            <h2 id="h2skillBarText">Blockchain Dev</h2>
            <p>Solidity development for unique blockchain apps</p>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Skills;