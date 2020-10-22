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
            <div className="about__section--position container--section">
                <div className="about__section--left"></div>
                <div className="about__section--right">
                    <div className="about__section--box first-box">
                        <h3>WHO AM I?</h3>
                        <span className="decoration"></span>
                        <p>
                            I'm 23 years old experienced sales and customer service consultant. During my career as a salesman I took 7th place in the T-Mobile ranking of the best sellers in Poland.
                            For about half a years I held an additional position as an optical fiber sales specialist.
                            Since I was kid I've been interesed in everything related to technology and future.
                            I've decided to become a programmer about a year ago.
                            I've started learning just from Google and YouTube, after few months I've started CodersLab bootcamp and I've finished it recently. I want to develop in the broadly understood IT direction.
                            Starting from writing the code, through contact with the client and in the future managing IT teams.
                        </p>
                    </div>
                    <div className="about__section--box second-box">
                        <h3>MORE ABOUT ME</h3>
                        <span className="decoration"></span>
                        <p>
                            My interests are primarily technologies of the future and outer space. My biggest dreams are to live in the times of highly developed technology allowing for complete transfer to virtual reality
                            indistinguishable from the real world or free and rapid exploration of space. I want to be a person who will contribute to such a development of humanity. I also have a mundane hobby like playing the guitar and digital art. 
                        </p>
                        <p>My favourite book: "Ludzkość Poprawiona" - Grzegorz Lindenberg</p>
                        <p>My favourite movie: "Interstellar" - Christopher Nolan</p>
                        <p>My music taste is from dnb, dub and jungle, through metal and rock music, to jazz and classical music.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
