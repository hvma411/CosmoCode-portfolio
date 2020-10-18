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

const About = () => {
    return (
        <section className="about__section" id="about">
            <div className="title-box">
                <span></span>
                <h3>About</h3>
            </div>
            <div className="about__section--position">
                <div className="section__sides--left">
                    <div className="name">Kamil Nosek</div>
                    <div className="photo--box">
                        <div className="photo"></div>
                    </div>
                </div>
                <div className="section__sides--right">
                    <h4>Hello, I'm Kamil.</h4>
                    <div className="about--txt">I'm 23 years old experienced sales / customer service consultant and web developer. During my career as a salesman I took 7th place in the T-Mobile ranking of the best sellers in Poland.
                            For about half a year I held an additional position as an optical fiber sales specialist.
                            Since I was kid I've been interesed in everything related to technology and future.
                            I've decided to become a programmer about a year ago.
                            I've started learning just from Google and YouTube, after few months I've started CodersLab bootcamp and I've finished it recently. I want to develop in the broadly understood IT direction.
                    </div>
                </div>
            </div>

            {/* <div className="about__section--right">
                <div className="about__section--box first-box">
                    <h3>WHO AM I?</h3>
                    <span className="decoration"></span>
                    <p>
                            I'm 23 years old experienced sales / customer service consultant and web developer. During my career as a salesman I took 7th place in the T-Mobile ranking of the best sellers in Poland.
                            For about half a year I held an additional position as an optical fiber sales specialist.
                            Since I was kid I've been interesed in everything related to technology and future.
                            I've decided to become a programmer about a year ago.
                            I've started learning just from Google and YouTube, after few months I've started CodersLab bootcamp and I've finished it recently. I want to develop in the broadly understood IT direction.
                        </p>
                    </div>
                    <div className="about__section--box second-box">
                        <h3>MORE ABOUT ME</h3>
                        <span className="decoration"></span>
                        <p>
                            My interests are primarily technologies of the future and outer space - AI, virtual reality, robotics, exploring the universe. My biggest dreams are to live in the times of highly developed technology allowing for complete transfer to virtual reality
                            indistinguishable from the real world, free and rapid exploration of space. I want to be a person who will contribute to such a development of humanity. I also have a mundane hobby like playing the guitar and digital art. 
                        </p>
                        <p>My favourite book: "Ludzkość Poprawiona" - Grzegorz Lindenberg</p>
                        <p>My favourite movie: "Interstellar" - Christopher Nolan</p>
                        <p>My music taste is from dnb, dub and jungle, through metal and rock music, to jazz and classical music.</p>
                    </div>
                </div> */}
        </section>
    )
}

export default About;
