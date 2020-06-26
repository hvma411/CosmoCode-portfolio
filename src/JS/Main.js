import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faSass, faHtml5, faCss3Alt, faReact, faNpm, faAdobe, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import FontAwesome from "react-fontawesome";


const AboutMe = () => {
    return (
        <>
            <section className="hello__section">
                <div className="earth"></div>
                <div className="hello__section--position container--header__info">
                    <div className="hello__section--hello">
                        <h1 className="name">HELLO I'M KAMIL</h1>
                        <h2 className="role">JUNIOR FRONTEND DEVELOPER</h2>
                        <h3 className="tech">
                            <div className="archLeft">
                                <FontAwesomeIcon icon={faChevronLeft} className="arch"/>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faReact}/>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faJsSquare}/>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faHtml5}/>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCss3Alt}/>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faSass} />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faGithub}/>
                            </div>
                            <div className="firebase__container">
                                <svg className="firebase" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 172 172" style={{ fill: "#000000"}}>
                                    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
                                        <path d="M0,172v-172h172v172z" fill="none"></path>
                                    <g>
                                        <path d="M28.66667,132.58333l54.5885,-102.35433c1.15025,-2.15717 4.26058,-2.11775 5.3535,0.07167l18.89133,37.78267z" fill="#b3fff9"></path>
                                        <path d="M28.66667,132.55467l19.87317,-122.54642c0.51958,-3.20708 4.82675,-3.90225 6.33175,-1.02125l38.29508,73.401z" fill="#b3fff9"></path>
                                        <path d="M28.69533,132.53317l0.71667,-0.56258l62.81225,-51.38858l-17.716,-33.95567z" fill="#50d2c8"></path>
                                        <path d="M28.66667,132.58333l95.55317,-92.13825c2.00308,-1.93142 5.34633,-0.79192 5.75483,1.96008l13.35867,90.17817l-53.75,31.32908c-2.18225,1.2255 -4.84467,1.2255 -7.02692,0z" fill="#66FCF1"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="slash">
                                
                            </div>
                            <div className="archRight">
                                <FontAwesomeIcon icon={faChevronRight} className="arch"/>
                            </div>
                            
                        </h3>
                    </div>
                </div>
            </section>
            <section className="about__section">
                <div className="about__section--position container--header__info">
                    <div className="about__section--photo">
                        <h3>PHOTO</h3>
                    </div>
                    <div className="about__section--txt">
                        <h3>WHO AM I?</h3>
                        <p>
                            I'm 23 years old sales and customer service consultant. Since I was kid I have been interesed in everything related to computers and technologies.
                            I've decided to become a programmer about a year ago.
                            I've started learning just from Google and YouTube, after few months I've started CodersLab bootcamp and I've finished it recently.
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutMe