import React from "react";
import "./reasons.css";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import adidas from '../../assets/adidas.png';
import nb from '../../assets/nb.png';
import nike from '../../assets/nike.png';

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-reasons">
        <img src={image1} alt="fit guy" />
        <img src={image2} alt="fit guy" />
        <img src={image3} alt="fit guy" />
        <img src={image4} alt="fit guy" />
      </div>
      <div className="right-reasons">
        <span>Some Reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> choose us?</span>
        </div>
        <div className="details">
          <div>
            <img src={tick} alt="detail"></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="detail" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="detail" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="detail" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <div className="partnership">
          <article>Our partners</article>
          <div className="partner-logo">
            <img src={nb} alt="nb" />
            <img src={adidas} alt="adidas" />
            <img src={nike} alt="nike" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reasons;
