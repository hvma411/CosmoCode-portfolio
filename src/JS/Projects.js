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

const Projects = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])

    return (
        <section className="portfolio__section" id="webdev">
            <div className="portfolio__nav" data-aos="fade-right">
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
            <div className="portfolio--box" data-aos="fade-up"></div>
        </section>
    );
};

export default Projects