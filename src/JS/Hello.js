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
            <div className="hello__section--position container--section">
                <div className="hello__section--hello">
                    <div className="main--txt">
                        <h1 className="name">HELLO I'M KAMIL</h1>
                        <h2 className="role">FRONT-END DEVELOPER</h2>
                        <div className="tech">
                            <div className="archLeft">
                                <FontAwesomeIcon icon={faChevronLeft} className="arch"/>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faReact}/>
                            </div>
                            <div className="redux__container">
                                <svg className="redux" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="0.9em" height="0.9em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 244"><path d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896c-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895c.326 4.887 2.28 9.122 5.212 12.054c-11.076 21.828-28.016 37.791-53.426 51.148c-17.266 9.122-35.183 12.38-53.1 10.1c-14.66-1.955-26.062-8.47-33.23-19.222c-10.424-15.963-11.401-33.23-2.605-50.496c6.19-12.38 15.962-21.502 22.152-26.063c-1.303-4.235-3.258-11.402-4.235-16.614c-47.237 34.207-42.35 80.468-28.016 102.295c10.75 16.29 32.577 26.389 56.684 26.389c6.515 0 13.03-.652 19.546-2.28c41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176c16.288 10.751 28.016 24.76 34.531 41.7c5.538 13.683 5.212 27.04-.652 38.443c-9.121 17.266-24.432 26.714-44.63 26.714c-13.031 0-25.41-3.91-31.926-6.842c-3.583 3.258-10.099 8.47-14.66 11.729c14.009 6.515 28.343 10.099 42.025 10.099c31.274 0 54.404-17.267 63.2-34.533c9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895c-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325c-13.357-22.153-18.895-46.26-16.94-72.323c1.302-19.547 7.818-36.488 19.22-50.497c9.447-12.054 27.69-17.918 40.07-18.243c34.531-.652 49.19 42.351 50.168 59.618c4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451c-14.985 41.7-5.212 81.771 13.031 113.372c-1.628 2.28-2.606 5.864-2.28 9.448z" fill="#66FCF1"/></svg>
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
                            <div className="slash"></div>
                            <div className="archRight">
                                <FontAwesomeIcon icon={faChevronRight} className="arch"/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="orbit-box">
                        <div className="orbit">
                                <div className="planet"></div>
                        </div>
                    </div> */}
                    <div className="main--img">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hello;