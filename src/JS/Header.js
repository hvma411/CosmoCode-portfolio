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
            <div className="header__nav">
                <div className="header__nav--logo">COSMOCODE</div>
                <nav className="header__nav--navigation">
                    <Link to="/">MAIN</Link>
                    <Link to="/aboutme">ABOUT ME</Link>
                    <Link to="/webdev">WEB DEVELOPMENT</Link>
                    <Link to="/digitalart">DIGITAL ART</Link>
                    <Link to="/contact">CONTACT ME</Link>
                </nav>
            </div>
            <div className="header__main container">
                <div className="header__main--hello">
                    <h1 className="name">HELLO I'M KAMIL</h1>
                    <h2 className="job">JUNIOR FRONTEND DEVELOPER</h2>
                </div>
            </div>
        </header>
    )
}

export default Header