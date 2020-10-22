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


const Hello = () => {

    return (
        <section className="hello__section mobile" id="header">
            <div className="background__image"></div>
            <div className="hello__section--position container--section">
                <div className="hello__section--hello">
                    <div className="main--txt">
                        <h1 className="name">Your bussiness at a higher level</h1>
                        <h2 className="role">websites, web apps, branding</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hello;