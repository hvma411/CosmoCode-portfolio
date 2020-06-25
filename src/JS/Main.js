import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const AboutMe = () => {
    return (
        <>
            <section className="hello__section">
                <div className="hello__section--position container--header__info">
                    <div className="hello__section--hello">
                        <h1 className="name">HELLO I'M KAMIL</h1>
                        <h2 className="role">JUNIOR FRONTEND DEVELOPER</h2>
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
                            I've been looking in the browser console very often to view the page from the "inside", I've been creating my own MMORPG games servers 
                            and also I've been trying to build some kind of websites so about a year ago I decided to become a programmer.
                            I've started learning just from Google and YouTube, after few months I've started CodersLab bootcamp and I've finished it recently.
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutMe