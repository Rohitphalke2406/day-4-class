import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';



function Footer(){
    return(
        <footer>
            <div className="contact-container">
                <div className="logo-container">
                    <img src="https://img.freepik.com/free-vector/letter-logo-gradient-colorful-design-illustration_483537-1043.jpg?t=st=1709812524~exp=1709816124~hmac=218a96c64fe1e57a80a1451212dcb0d5e9a31615878d2cd7e27b8f9e1dc24831&w=740" alt="" />
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Incidunt consequuntur amet culpa cum itaque neque.</p>
                <ul>
                    <li><a href="About">About</a></li>
                    <li><a href="Careers">Careers</a></li>
                    <li><a href="History">History</a></li>
                    <li><a href="Services">Services</a></li>
                    <li><a href="Projects">Projects</a></li>
                    <li><a href="Blog">Blog</a></li>
                    
                </ul>

                <div className="social-media-icons">
                    <a href="#facebook"><FontAwesomeIcon icon={faFacebook}  /></a>
                    <a href="#twitter"><FontAwesomeIcon icon={faTwitter}  /></a>
                    <a href="#instagram"><FontAwesomeIcon icon={faInstagram}  /></a>
                    <a href="#github"><FontAwesomeIcon icon={faGithub}  /></a>
                    <a href="#linkedin"><FontAwesomeIcon icon={faLinkedin}  /></a>
                    

                </div>
            </div>
        </footer>
    );
}

export default Footer;