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
import { faJsSquare, faSass, faHtml5, faCss3Alt, faReact, faNpm, faGithubSquare, faAdobe, faGithub, faLinkedinIn, faLinkedin, faFacebook, faFacebookSquare, faGitSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import FontAwesome from "react-fontawesome";

import { db } from '../../firebaseConfig/fire';

const Contact = () => {

    const [contactForm, setContactForm] = useState({
        fullName: "",
        emailAddress: "",
        questMessage: ""
    })

    const sendMessage = () => {
        db.collection('formMessages').add(contactForm).then((docRef) => {
            console.log("Document written succefully with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error)
        });
    }

    const handleFormChange = (e) => {
        e.persist();
        setContactForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        sendMessage();;
        console.log(contactForm);
    }

    return (
        <section className="content__section" id="contact">
            <div className="content__section--position container--section">
                <h3>CONTACT ME</h3>
                <span className="decoration"></span>
                <div className="contact-main-box">
                    <div className="left-box">
                        <div className="contact-details">
                            <h3>Contact informations:</h3>
                            <span>Call me:</span>
                            <h4>+48 882 502 424</h4>
                            <span>Email:</span>
                            <h4>kamil@cosmocode.pl</h4>
                            <span>Address:</span>
                            <h4>Krakow, Poland</h4>
                            <h3>Follow me:</h3>
                            <div className="social-box">
                                <a href="https://www.linkedin.com/in/kamil-nosek" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />                               
                                </a>
                                <a href="https://github.com/hvma411" target="_blank">
                                    <FontAwesomeIcon icon={faGithubSquare} />
                                </a>
                                <a href="https://www.instagram.com/hvma411/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </a>
                                <a href="https://www.facebook.com/hvma411/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </a>
                                <a href="https://www.youtube.com/channel/UC4xlC6jh8UCGD3eGtOuhLZg?view_as=subscriber" target="_blank">
                                    <FontAwesomeIcon icon={faYoutubeSquare} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="form-box">
                        <div className="headers-box">
                            <h3>Any questions or proposals?</h3>
                            <h3>Feel free to send me a message.</h3>
                        </div>
                        <form>
                            <div className="input-box"><input type="text" name="fullName" value={ contactForm.fullName } onChange={ handleFormChange } placeholder="Your full name" /></div>
                            <div className="input-box"><input type="text" name="emailAddress" value={ contactForm.emailAddress } onChange={ handleFormChange } placeholder="Your email address" /></div>
                            <div className="textarea-box"><textarea name='questMessage' value={ contactForm.questMessage } onChange={ handleFormChange } placeholder="Your message..." /></div>
                            <div className="button-box"><button onClick={ handleButtonClick } ><FontAwesomeIcon icon={faArrowAltCircleRight} /> Send message</button></div>
                        </form>
                    </div>
                </div>
            </div>
                <div className="flying-social-box">
                    <a href="https://www.linkedin.com/in/kamil-nosek" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="abc" />                               
                    </a>
                    <a href="https://github.com/hvma411" target="_blank">
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                    <a href="https://www.instagram.com/hvma411/" target="_blank">
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </a>
                    <a href="https://www.facebook.com/hvma411/" target="_blank">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    <a href="https://www.youtube.com/channel/UC4xlC6jh8UCGD3eGtOuhLZg?view_as=subscriber" target="_blank">
                        <FontAwesomeIcon icon={faYoutubeSquare} />
                    </a>
                </div>
        </section>
    );
};

export default Contact;