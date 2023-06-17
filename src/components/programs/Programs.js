import React from "react"
import {programsData} from '../../data/programsData'
import leftArrow from '../../assets/leftArrow.png'
import './programs.css'

const Programs = () => {
  return (
    <div id="programs" className="programs-container">
        <div className="programs-title">
            <span className="stroke-text">explore our </span><span>programs </span><span className="stroke-text">to shape you</span>
        </div>
        <div className="programs-body">
            {programsData.map((data,index)=>(
                <div className="program" key={index}>
                    {data.image}
                    <p>{data.heading}</p>
                    <article>{data.details}</article>
                    <button>Join now</button> <span><img className="left-arrow" src={leftArrow} alt="left arrow" /></span> 
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs;

