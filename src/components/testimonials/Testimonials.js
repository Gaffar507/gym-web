import React, { useState } from "react";
import './testimonials.css';
import {testimonialsData} from '../../data/testimonialsData';
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png';
import { motion } from "framer-motion";

const Testimonials =()=>{
   const [selected, setSelected]=useState(0);
   const tLength=testimonialsData.length;
    const transition ={type:'spring', duration:3}
    return(
        <div className="testimonials" id="testimonials">
                <div className="left-t">
                    <span>Testimonials</span>
                    <span className="stroke-text">what they</span>
                    <span>say about us?</span>
                    <div className="person-info">
                        <motion.span
                                key={selected}
                                initial={{opacity:0, x:-100}}
                                animate={{opacity:1, x:0}}
                                exit={{opacity:0, x:100}}
                                transition={{...transition,duration:2}}
                        >{testimonialsData[selected].review}</motion.span>
                        <div className="name-info">
                            <span>{testimonialsData[selected].name} -</span><span> {testimonialsData[selected].status}</span>
                        </div>
                    </div>
                </div>
                <div className="right-t">
                    <motion.div
                        initial={{opacity:0, x:-60}}
                        whileInView={{opacity:1, x:0}}
                        transition={{...transition, duration:3}}
                    ></motion.div>
                    <motion.div
                        initial={{opacity:0, x:70}}
                        whileInView={{opacity:1, x:0}}
                        transition={{...transition,duration:3}}
                    ></motion.div>
                    <motion.img
                     key={selected}
                     initial={{opacity:0, x:100}}
                     animate={{opacity:1, x:0}}
                     exit={{opacity:0, x:-100}}
                     transition={{...transition,duration:2}}
                     src={testimonialsData[selected].image} alt="reviewer" />
                    <div><img onClick={()=>
                    selected===0? setSelected(tLength-1):
                    setSelected((pre)=>pre-1)
                    } src={leftArrow} alt="arrow" /> 
                    <img onClick={()=>
                    selected===tLength-1? setSelected(0): setSelected((pre)=>pre+1)} src={rightArrow} alt="arrow" /></div>
                </div>
        </div>
    )
}
export default Testimonials;