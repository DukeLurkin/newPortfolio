import React from 'react'
import './intro.css';
import bg from '../../assets/LukeHeadshotLeft.png';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro" className="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">I'm <span className="introName">Luke</span> <br />Website Designer</span>
        <p className='introPara'>I'm a freelance web designer based in Philadelphia, specialized in creating<br></br> modern, responsive websites and blockchain technologies.</p>        
        <Link title="Hire me" activeClass='active' to='contact'/*<<must be id*/ spy={true} smooth={true} offset={-100} duration={500}><button className='btn'><img src={btnImg} alt="Hire" className='btnImg' /> Hire Me</button></Link>
      </div>
      <img src={bg} alt="Profile" className='bg' />
    </section>

  )
}

export default Intro