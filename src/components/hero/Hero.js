import React from "react";
import calories from "../../assets/calories.png";
import heart from "../../assets/heart.png";
import athlet from "../../assets/hero_image.png";
import rainbow from "../../assets/hero_image_back.png";
import Header from "../header/Header";
import "./hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = {type:'spring', duration:3}

  return (
    <div className="hero-container" id="hero">
      <div className="blur"></div>
      {/* left hero starts */}
      <div className="hero-left">
        <Header />
        {/* best add section starts */}
        <div className="best-add-sec">
          <motion.div 
                 initial={{left:'245px'}}
                 whileInView={{left:'8px'}}
                 transition={{...transition, type:'tween'}}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        {/* best add section ends */}

        {/* title section starts */}
        <div className="hero-title">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            In here we will help you to shape and build your ideal body and live
            up your life to fullest.
          </div>
        </div>
        {/* title section ends */}

        {/* figure section starts */}
        <div className="figure">
          <div>
            <span>+140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        {/* figure section ends */}

        <div className="link">
          <button className="btn">Get Started</button>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>
        <motion.div
                            initial={{right:'40rem'}}
                            whileInView={{right:'30rem'}}
                            transition={{...transition}}
        className="thumbnail">
          <img src={calories} alt="calories" className="calories" />
          <section className="thumbnail-text">
            <span>Calories</span>
            <span>Burned</span>
            <span>220</span>
            <span>Kcal</span>
          </section>
        </motion.div>
      </div>
      {/* left hero ends */}

      {/* Right hero starts */}
      <div className="hero-right">
        <div className="back-img">
          <img src={athlet} alt="athlet" />
          <motion.img
                    initial={{right:'10rem'}}
                    whileInView={{right:'6rem'}}
                    transition={{...transition}}
          src={rainbow} alt="rainbow effect" className="rainbow" />
        </div>
        <div className="right-container">
          <button className="btn">Join Now</button>
          <motion.section 
          initial={{right:'-1rem'}}
          whileInView={{right:'5rem'}}
          transition={{...transition}}
          >
            <img src={heart} alt="heart" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.section>
        </div>
      </div>
      {/* Right hero ends */}
    </div>
  );
};

export default Hero;
