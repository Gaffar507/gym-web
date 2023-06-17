import React from "react";
import whiteTick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
import "./plans.css";

const Plans = () => {
  return (
    <div className="plans" id="plans">
      <div className="plans-title">
        <span className="stroke-text">ready to start</span>
        <span> your journey </span>
        <span className="stroke-text"> with us</span>
      </div>
      <div className="blur"></div>
      <div className="plans-card">
        {plansData.map((data, i) => (
          <div className="card-container" key={i}>
            {data.icon}
            <h4>{data.name}</h4>
            <span>${data.price}</span>

            {data.features.map((feature, i) => (
              <div className="plan-details" key={i}>
                <div>
                  <img src={whiteTick} alt="tick"></img>
                  <span>{feature}</span>
                </div>
              </div>
            ))}
            <div>
              <span>See more benefits... </span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
