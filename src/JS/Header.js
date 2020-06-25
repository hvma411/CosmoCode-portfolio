import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header__nav container">
                <div className="header__nav--logo">COSMOCODE</div>
                <nav className="header__nav--navigation">
                    <ul>
                        <li><Link to="/">MAIN</Link></li>
                        <li><Link to="/aboutme">ABOUT ME</Link></li>
                        <li><Link to="/webdev">WEB DEVELOPMENT</Link></li>
                        <li><Link to="/digitalart">DIGITAL ART</Link></li>
                        <li><Link to="/contact">CONTACT ME</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header