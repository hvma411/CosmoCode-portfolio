import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faSass, faHtml5, faCss3Alt, faReact, faNpm, faAdobe, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import FontAwesome from "react-fontawesome";

const DigitalArt = () => {
    return (
        <section className="content__section" id="digital">
            <div className="content__section--position container--section">
                <h3>DIGITAL ART</h3>
                <span className="decoration"></span>
                <div className="projects-main-box">
                    <div className="project-box"></div>
                    <div className="project-box"></div>
                    <div className="project-box"></div>
                    <div className="project-box"></div>
                </div>
            </div>
        </section>
    );
};

export default DigitalArt;