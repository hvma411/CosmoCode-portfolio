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
import Aos from 'aos';

const About = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])

    return (
        <section className="about__section" id="about">
            <div className="top--box">
                <div className="title--box">
                    <span></span>
                    <h3>About</h3>
                </div>
                <div className="about__section--position">
                    <div className="section__sides--left">
                        <div className="name" data-aos="fade-down-right">Kamil Nosek</div>
                        <div className="photo--box" data-aos="fade-right">
                            <div className="photo" data-aos="fade-up-right"></div>
                        </div>
                    </div>
                    <div className="section__sides--right">
                        <div className="txt--reducer">
                            <h4>Hello, I'm Kamil.</h4>
                            <div className="about--txt">I'm 23 years old experienced sales / customer service consultant and web developer. During my career as a salesman I took 7th place in the T-Mobile ranking of the best sellers in Poland.
                                    Since I was kid I've been interesed in everything related to technology and future.
                                    I've decided to become a programmer about a year ago.
                                    I've started learning just from Google and YouTube, after few months I've started CodersLab bootcamp and I've finished it. I want to develop in the broadly understood IT direction.
                            </div>
                            <div className="about--txt">
                                My interests are primarily technologies of the future and outer space - AI, virtual reality, robotics, exploring the universe. My biggest dreams are to live in the times of highly developed technology allowing for complete transfer to virtual reality
                                indistinguishable from the real world, free and rapid exploration of space. I want to be a person who will contribute to such a development of humanity. I also have a mundane hobby like playing the guitar and digital art.
                            </div>
                            <div className="about--txt">
                                <p>My favourite book: "Ludzkość Poprawiona" - Grzegorz Lindenberg</p>
                                <p>My favourite movie: "Interstellar" - Christopher Nolan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom--box">
                <div className="subtitle--box">
                    <h3>I work with</h3>
                </div>
                <div className="stack">
                    <div className="stack__icon">
                        <div className="icon1 ico"></div>
                    </div>
                    <div className="stack__icon">
                        <div className="icon2 ico"></div>
                    </div>
                    <div className="stack__icon">
                        <div className="icon3 ico"></div>
                    </div>
                    <div className="stack__icon">
                        <div className="icon4 ico"></div>
                    </div>
                    <div className="stack__icon">
                        <div className="icon5 ico"></div>
                    </div>
                    <div className="stack__icon">
                        <div className="icon6 ico"></div>
                    </div>
                    <div className="stack__icon">
                        <div className="icon7 ico"></div>
                    </div>
                    <div className="stack__icon">
                        <div className="icon8 ico"></div>
                    </div>
                    <div className="stack__icon">
                        <div className="icon9 ico"></div>
                    </div>
                    <div className="stack__icon">
                        <div className="icon10 ico"></div>
                    </div>
                    <div className="stack__icon">
                        <div className="icon11 ico"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
