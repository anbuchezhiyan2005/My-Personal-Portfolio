import React from 'react';
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div className="hero">
            <img src = {profile_img} alt = "" />
            <h1><span>I'm Anbuchezhiyan</span>, from <span className ="IN">In</span><span className="D">d</span><span className="IA">ia</span></h1>
            <p>I am an aspiring backend developer from India</p>
            <div className='hero-action'>
                <div className = "hero-connect"> Connect with me</div>
                <div className = "hero-resume">My Resume</div>
            </div>
        </div>
    );
};

export default Hero;