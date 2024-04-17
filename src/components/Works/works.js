import React from 'react';
import './works.css';
import eCommerce from '../../assets/ecommerce.png';
import bucketList from '../../assets/bucketList.png';
import quizIcon from '../../assets/quizIcon.png';
import calendar from '../../assets/calendar.png';
import noteTaker from '../../assets/noteTaker.png';
import weatherApp from '../../assets/weatherApp.png';

export const Works = () => {
  return (
    <section id="works">
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>"
I find joy in ensuring my work reaches flawless precision. I eagerly anticipate utilizing my expertise to assist businesses in reaching their objectives and establishing a robust digital footprint."</span>
      <div className='worksImgs'>
        <div>
          <h4>WeatherApp</h4>
          <a title="Weather App" href="https://dukelurkin.github.io/WeatherAboveGround">
            <img src={weatherApp} alt='' className='worksImg' />
          </a>
        </div>
        <div>
          <h4>Ecommerce</h4>
          <a title="Ecommerce App" href="https://github.com/DukeLurkin/eCommerce">
            <img src={eCommerce} alt='' className='worksImg' />
          </a>
        </div>
        <div>
          <h4>BucketList</h4>
          <a title="Bucketlist App" href="https://pacific-beach-42449.herokuapp.com/">
            <img src={bucketList} alt='' className='worksImg' />
          </a>
        </div>
        <div>
          <h4>Quiz</h4>
          <a title="Timed Quiz App" href="https://dukelurkin.github.io/quiz/">
            <img src={quizIcon} alt='' className='worksImg' />
          </a>
        </div>
        <div>
          <h4>Calendar</h4>
          <a title="Calendar App" href="https://dukelurkin.github.io/calendar/">
            <img src={calendar} alt='' className='worksImg' />
          </a>
        </div>
        <div>
          <h4>Note Taker</h4>
          <a title="Note Taking App" href="https://fierce-citadel-59312.herokuapp.com/notes">
            <img src={noteTaker} alt='' className='worksImg' />
          </a>
        </div>
      </div>
      <a title="View All Apps on Github" href="https://github.com/DukeLurkin">
        <button className='worksBtn'>View More</button>
      </a>
    </section>
  )
}

export default Works