import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon2.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
           <div>
                <div className="container">
                  <div className="row">
                    <div className="col-6 mt-2">
                      <h1 className="fw-bold">New <br /> collections <br />  for everyone</h1>
                    </div>
                    <div className="col-3  handimg"> 
                  <img src={hand_icon} alt="" width={200} height={120} className="position-absolute"/>
                    </div>
                  </div>
                </div>
           
           </div>
           <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
           </div>
        </div>
        <div className="hero-right">
          <img src={hero_image}  height="550px" width="500px" />
        </div>
    </div>
  );
}

export default Hero