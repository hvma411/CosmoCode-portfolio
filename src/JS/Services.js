import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = () => {
    

    return (
        <section className="content__section services" id="services">
            <div className="content__section--position container--section">
                <div className="title-box">
                    <span></span>
                    <h3>My Services</h3>
                    
                </div>
                <div className="services-box">
                    <div className="service">
                        <div className="icon1"></div>
                        <h4>RWD Web Development</h4>
                        <p>I create web apps and websites with responsive consistend design that allows you to acces it on devices of various sizes.</p>
                    </div>
                    <div className="service">
                        <div className="icon2"></div>
                        <h4>Easy to manage websites</h4>
                        <p>Your bussines website or idea for a blog? Share it with me and I will develop it for you. You will receive a finished product with easy CMS for website management.</p>
                    </div>
                    <div className="service">
                        <div className="icon3"></div>
                        <h4>Full bussines branding</h4>
                        <p>Old looking bussines branding? Or maybe you don't heave it yet? Let me help you to create fresh and remaining in memory design for your bussines.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services