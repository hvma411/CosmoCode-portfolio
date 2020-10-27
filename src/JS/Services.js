import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Aos from 'aos';

const Services = () => {

    useEffect(() => {
        Aos.init({duration: 200});
    }, [])
    

    return (
        <section className="services__section mobile" id="services">
            <div className="services__section--position container--section">
                <div className="title-box">
                    <span></span>
                    <h3>My Services</h3>
                </div>
                <div className="services-box">
                    <div className="service" data-aos="zoom-out-right">
                        <div className="icon1"></div>
                        <h4>RWD Web Development</h4>
                        <p>I create web apps and websites with responsive consistend design that allows you to acces it on devices of various sizes.</p>
                    </div>
                    <div className="service" data-aos="zoom-out-up">
                        <div className="icon2"></div> 
                        <h4>Easy to manage websites</h4>
                        <p>Your business website or idea for a blog? Share it with me and I will develop it for you. You will receive a finished product with easy CMS for website management.</p>
                    </div>
                    <div className="service" data-aos="zoom-out-left">
                        <div className="icon3"></div>
                        <h4>Full business branding</h4>
                        <p>Old looking business branding? Or maybe you don't heave it yet? Let me help you to create fresh and remaining in memory design for your business.</p>
                    </div>
                </div>
                <div className="read__more--box">
                    <button className="read__more--btn">Read more</button>
                </div>
            </div>
        </section>
    )
}

export default Services