import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillsTitle'>My Skills</span>
      <span className='skillsDesc'>I have a wide range of skills that I use to create modern and responsive websites as well as mobile applications.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt="UIDesign" className='skillBarImg' />
          <div className='skillBarText'>
            <h2 id="h2skillBarText">UI/UX Design</h2>
            <p>This is demo text. Write whatever here</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt="WebDesign" className='skillBarImg' />
          <div className='skillBarText'>
            <h2 id="h2skillBarText">Web Design</h2>
            <p>This is demo text. Write whatever here</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt="AppDesign" className='skillBarImg' />
          <div className='skillBarText'>
            <h2 id="h2skillBarText">App Design</h2>
            <p>This is demo text. Write whatever here</p>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Skills;