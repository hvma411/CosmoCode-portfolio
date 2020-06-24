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
        <section className="about">
            <div className="about__me container">
                <div className="about__me--title">
                    <h3>ABOUT ME</h3>
                </div>
            </div>
        </section>
    )
}

export default AboutMe