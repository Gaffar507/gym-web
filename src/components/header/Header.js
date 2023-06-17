import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./header.css";
import bar from '../../assets/bars.png';
import {Link} from 'react-scroll';

const Header = () => {

  const mobile = window.innerWidth<=768? true: false
  const [menuOpen, setMenuOpen]= useState(false);

  return (
    <div className="header">
          <img src={logo} alt="logo" className="header-img" />
      {menuOpen===false && mobile===true? 
      <div onClick={()=>setMenuOpen(true)} style={{background:'var(--appColor)',borderRadius:'.4rem'}}>
        <img src={bar} alt="bar" style={{width:'1.2rem', height:'.8rem'}} />
      </div>
      :  <ul className="navbar">
      <li><Link onClick={()=>setMenuOpen(false)}spy={true} smoot={true} to="hero">Home</Link></li>
      <li><Link onClick={()=>setMenuOpen(false)}spy={true} smoot={true} to="programs">Programs</Link></li>
      <li><Link onClick={()=>setMenuOpen(false)}spy={true} smoot={true} to="reasons">Why us</Link></li>
      <li><Link onClick={()=>setMenuOpen(false)}spy={true} smoot={true} to="plans">Plans</Link></li>
      <li><Link onClick={()=>setMenuOpen(false)}spy={true} smoot={true} to="testimonials">Testimonials</Link></li>
      <li><Link onClick={()=>setMenuOpen(false)}spy={true} smoot={true} to="connect">Contact</Link></li>
    </ul>
    }
    </div>
  );
};

export default Header;
