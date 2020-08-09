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

import Hello from './Hello';
import About from './About';
import Projects from './Projects';
import DigitalArt from './DigitalArt';
import Contact from './Contact';


const Main = () => {
    

    return (
        <>
            <Hello />
            <About />
            <Projects />
            <DigitalArt />
            <Contact />
        </>
    )
}

export default Main