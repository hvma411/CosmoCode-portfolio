import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesome, faJsSquare, faSass, faHtml5, faCss3Alt, faReact, faNpm, faGithubSquare, faAdobe, faGithub, faLinkedinIn, faLinkedin, faFacebook, faFacebookSquare, faGitSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    return (
        <div className="footer">
        <div className="footer__top--box">
            <div className="reducer">
                <nav>
                    <div className="title--box">
                        <h4>Menu</h4>
                    </div>
                    <ul>
                        <li><Link to="header" smooth="true" duration={1000}>Main</Link></li>
                        <li><Link to="services" smooth="true" duration={1000}>Services</Link></li>
                        <li><Link to="webdev" smooth="true" duration={1000}>Portfolio</Link></li>
                        <li><Link to="about" smooth="true" duration={1000}>About</Link></li>
                        <li><Link to="contact" smooth="true" duration={1000}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="reducer">
                <div className="social">
                    <div className="title--box">
                        <h4>Social media</h4>
                    </div>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faLinkedin} />
                            <a href="https://www.linkedin.com/in/kamil-nosek" target="_blank"> Linkedin</a></li>
                        <li>
                            <FontAwesomeIcon icon={faGithubSquare}/>
                            <a href="https://github.com/hvma411" target="_blank"> GitHub</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                            <a href="https://www.instagram.com/hvma411/" target="_blank"> Instagram</a>  
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faYoutubeSquare} />
                            <a href="https://www.youtube.com/channel/UC4xlC6jh8UCGD3eGtOuhLZg?view_as=subscriber" target="_blank"> YouTube</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="reducer">
                <div className="materials">
                    <div className="title--box">
                        <h4>Icons</h4>
                    </div>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faFontAwesome} />
                            <a href="http://www.fontawesome.com" target="_blank"> FontAwesome</a>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/material-sharp/16/000000/icons8-new-logo.png"/> 
                            <a href="http://www.icons8.com" target="_blank"> Icons8</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer__bottom--box">{new Date().getFullYear()}  &#169;. All rights reserved - CosmoCode.pl Kamil Nosek</div>
    </div>
    )
}
export default Footer;