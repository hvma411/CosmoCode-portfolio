import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import Hello from './Hello';
import Services from './Services';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const Main = () => {
    
    return (
        <>
            <Hello />
            <Services />
            <Projects />
            <About />
            <Contact />
        </>
    );
};

export default Main