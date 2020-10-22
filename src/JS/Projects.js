import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faSass, faHtml5, faCss3Alt, faReact, faNpm, faAdobe, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import FontAwesome from "react-fontawesome";

const Projects = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])

    
    return (
        <section className="portfolio__section" id="webdev">
            <div className="portfolio__nav">
                <div className="reducer"></div>
                <nav className="portfolio">
                    <h4>Portfolio</h4>
                    <h5>web development:</h5>
                    <ul>
                        <li>Oddaj rzeczy</li>
                        <li>Portfolio Website</li>
                        <li>Best Shop</li>
                        <li>CMS</li>
                    </ul>
                    <h5>branding:</h5>
                    <ul>
                        <li>CosmoCode</li>
                        <li>BestShop</li>
                        <li>GiveThingsBack</li>
                    </ul>
                    <h5>digital art:</h5>
                    <ul>
                        <li>Pyramids</li>
                        <li>Sand mountains</li>
                        <li>Logotypes</li>
                    </ul>
                </nav>
            </div>
            <div className="portfolio--box"></div>
            {/* <div className="content__section--position container--section">

                <h3>WEB DEVELOPMENT</h3>
                <span className="decoration"></span>
                <div className="projects-main-box">
                    <div data-aos="fade-up" className="project-box"></div>
                    <div data-aos="fade-up" className="project-box"></div>
                    <div data-aos="fade-up" className="project-box"></div>
                </div>
            </div> */}
        </section>
    )
}

export default Projects