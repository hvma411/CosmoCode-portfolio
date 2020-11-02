import React, {  useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesome, faJsSquare, faSass, faHtml5, faCss3Alt, faReact, faNpm, faGithubSquare, faAdobe, faGithub, faLinkedinIn, faLinkedin, faFacebook, faFacebookSquare, faGitSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import FontAwesome from "react-fontawesome";
import Aos from 'aos'
import Footer from './Footer';

import { db } from '../../firebaseConfig/fire';

const Contact = () => {

    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])

    const [contactForm, setContactForm] = useState({
        fullName: "",
        emailAddress: "",
        questMessage: ""
    })

    const sendMessage = () => {

        const errors = [];

        if (contactForm.fullName === "" || contactForm.fullName.length < 2) {
            errors.push("wrongName");
            document.querySelector(".wrongName").style.display = "block";
        };

        if (validateEmail(contactForm.emailAddress) === false) {
            errors.push("wrongEmail");
            document.querySelector(".wrongEmail").style.display = "block";
        };

        if (contactForm.questMessage.length < 60) {
            errors.push('wrongMessage');
            document.querySelector(".wrongMessage").style.display = "block";
        }

        if (contactForm.fullName === "" && contactForm.emailAddress === "" && contactForm.questMessage === "") {
            errors.push("emptyForm");
            document.querySelector(".emptyForm").style.display = "block";
            document.querySelector(".wrongName").style.display = "none";
            document.querySelector(".wrongEmail").style.display = "none";
            document.querySelector(".wrongMessage").style.display = "none";
        }
        
        if (errors.length < 1) {
            db.collection('formMessages').add(contactForm).then((docRef) => {
                console.log("Document written succefully with ID: ", docRef.id);
            })
            .then(() => {
                setContactForm({
                    fullName: "",
                    emailAddress: "",
                    questMessage: ""
                })
                document.querySelector(".messageInfo").style.display = "block";
                const hideInfo = setTimeout(() => {
                    document.querySelector(".messageInfo").classList.add('hideMessageInfo');
                }, 1000);
                const classClear = setTimeout(() => {
                    document.querySelector(".messageInfo").classList.remove('hideMessageInfo');
                    document.querySelector(".messageInfo").style.display = "none";
                }, 2000);
            })
            .catch((error) => {
                console.error("Error adding document: ", error)
            });  
        }

    }

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
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

    useEffect(() => {
        const scrollToHide = e => {
            const flyingBoxToHide = document.querySelector('.flying-social-box').getBoundingClientRect().top;
            const element = document.querySelector('.about__section').getBoundingClientRect().top;

            if (Math.round(flyingBoxToHide) > Math.round(element) && document.documentElement.clientWidth < 421) {
                document.querySelector('.flying-social-box').classList.add('flying-social-box--invisible')
            } else {
                document.querySelector('.flying-social-box').classList.remove('flying-social-box--invisible')
            }
            
        }
        window.addEventListener('scroll', scrollToHide);
    })

    useEffect(() => {
        if (contactForm.fullName.length > 2) {
            document.querySelector(".wrongName").style.display = "none";
        };

        if (validateEmail(contactForm.emailAddress) === true) {
            document.querySelector(".wrongEmail").style.display = "none";
        };

        if (contactForm.questMessage.length > 59) {
            document.querySelector(".wrongMessage").style.display = "none";
        }
        
        if (contactForm.fullName.length > 0 || contactForm.emailAddress.length > 0 || contactForm.questMessage.length > 0) {
            document.querySelector(".emptyForm").style.display = "none";
        }
    }, [contactForm])

    const actualYear = () => {
        return new Date().getFullYear();
    }

    return (
        <>
            <section className="contact__section mobile" id="contact">
                        <div className="top--box">
                            <div className="left-box" data-aos="fade-right">
                                <div className="map--box"></div>
                                <div className="contact-details">
                                    <div className="wrapper">
                                        <h3>Contact informations:</h3>
                                        <span>Call me:</span>
                                        <h4>+48 882 502 424</h4>
                                        <span>Email:</span>
                                        <h4>kamil@cosmocode.pl</h4>
                                        <span>Address:</span>
                                        <h4>Krakow, Poland</h4>
                                    </div>
                                    <div className="wrapper">
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
                                            <a href="https://www.facebook.com/CosmoCodePL" target="_blank">
                                                <FontAwesomeIcon icon={faFacebookSquare} />
                                            </a>
                                            <a href="https://www.youtube.com/channel/UC4xlC6jh8UCGD3eGtOuhLZg?view_as=subscriber" target="_blank">
                                                <FontAwesomeIcon icon={faYoutubeSquare} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="form-box" data-aos="fade-up">
                                <div className="headers-box">
                                    <h3>Let's create something together. Text me.</h3>
                                </div>
                                <form>
                                    <div className="input-box"><input type="text" name="fullName" value={ contactForm.fullName } onChange={ handleFormChange } placeholder="Your full name" /></div>
                                    <div className="input-box"><input type="text" name="emailAddress" value={ contactForm.emailAddress } onChange={ handleFormChange } placeholder="Your email address" /></div>
                                    <div className="textarea-box"><textarea name='questMessage' value={ contactForm.questMessage } onChange={ handleFormChange } placeholder="Your message..." /></div>
                                    <div className="button-box"><button onClick={ handleButtonClick } ><FontAwesomeIcon icon={faArrowAltCircleRight} /> Send message</button></div>
                                    <div className="errors-box">
                                        <span className="wrongName">I'd like to know your name, type it please :)</span>
                                        <span className="wrongEmail">Your email address have to be correct. Otherwise I won't be able to write back to you.</span>
                                        <span className="wrongMessage">I think your message is too short. Write some more words please. (min. 60 characters)</span>
                                        <span className="emptyForm">Type your name, email address and message (min. 60 characters), please.</span>
                                        <span className="messageInfo">Your message has been sent.</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Footer />
                <div className="flying-social-box">
                    <a href="https://www.linkedin.com/in/kamil-nosek" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />                               
                    </a>
                    <a href="https://github.com/hvma411" target="_blank">
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                    <a href="https://www.instagram.com/hvma411/" target="_blank">
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </a>
                    <a href="https://www.facebook.com/CosmoCodePL/" target="_blank">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    <a href="https://www.youtube.com/channel/UC4xlC6jh8UCGD3eGtOuhLZg?view_as=subscriber" target="_blank">
                        <FontAwesomeIcon icon={faYoutubeSquare} />
                    </a>
                </div>
            </section>
        </>
    );
};
export default Contact;