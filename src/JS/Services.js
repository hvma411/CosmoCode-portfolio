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
        <section className="content__section services">
            <div className="content__section--position container--section">
                <div className="title-box">
                    <span></span>
                    <h3>services</h3>
                    
                </div>
                <div className="services-box">
                    <div className="service">
                        <div className="icon1"></div>
                        <h4>web development</h4>
                    </div>
                    <div className="service">
                        <div className="icon2"></div>
                        <h4>branding</h4>
                    </div>
                    <div className="service">
                        <div className="icon3"></div>
                        <h4>grow up</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services