import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <header>
            <div className="header__nav container" >
                <div className="header__nav--logo">COSMOCODE</div>
                <nav className="header__nav--navigation">
                    <ul>
                        <li><Link to="header" smooth="true" duration={1000}>Main</Link></li>
                        <li><Link to="services" smooth="true" duration={1000}>Services</Link></li>
                        <li><Link to="webdev" smooth="true" duration={1000}>Portfolio</Link></li>
                        <li><Link to="about" smooth="true" duration={1000}>About</Link></li>
                        <li><Link to="contact" smooth="true" duration={1000}>Contact</Link></li>
                    </ul>
                </nav>
                <HamburgerMenu />
            </div>
        </header>
    )
}

const HamburgerMenu = () => {
    const handleHamburgerClick = () => {
        const hamburger = document.querySelector('.hamburger');
        hamburger.classList.toggle('hamburger--active')
    }

    return (
        <button className="hamburger" onClick={ handleHamburgerClick }>
            <span className="hamburger__box">
                <span className="hamburger__inner"></span>
            </span>
        </button>
        )
    }

export default Header