import React from 'react'
import './footer.css'
import insta from '../../assets/instagram.png';
import gitHub from '../../assets/github.png'
import linkedIn from '../../assets/linkedin.png'
import fitClub from '../../assets/logo.png'

const Footer = () => {
  return (
        <div className="footer" id='footer'>
            <hr />
            <div className="social-logo">
                <img src={gitHub} alt="github" />
                <img src={linkedIn} alt="linkedin" />
                <img src={insta} alt="insta" />
            </div>
            <img src={fitClub} alt="logo" />
        </div>
  )
}

export default Footer;
