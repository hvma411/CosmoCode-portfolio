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
import { faJsSquare, faSass, faHtml5, faCss3Alt, faReact, faNpm, faAdobe, faGithub, faLinkedinIn, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import FontAwesome from "react-fontawesome";

const Contact = () => {

    return (
        <section className="content__section" id="contact">
            <div className="content__section--position container--section">
                <h3>CONTACT ME</h3>
                <span className="decoration"></span>
                <div className="contact-main-box">
                    <div className="left-box">
                        <div className="contact-details">
                            <h3>You can find me here:</h3>
                            <div className="social-box">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div>
                        </div>
                    </div>
                    <div className="form-box">
                        <div className="headers-box">
                            <h3>Any questions or proposals?</h3>
                            <h3>Feel free to send me a message.</h3>
                        </div>
                        <form>
                            <div className="input-box"><input type="text" name="name" placeholder="Your full name" /></div>
                            <div className="input-box"><input type="text" name="email" placeholder="Your email address" /></div>
                            <div className="textarea-box"><textarea name='message' placeholder="Your message..." /></div>
                            <div className="button-box"><button><FontAwesomeIcon icon={faArrowAltCircleRight} /> Send message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;