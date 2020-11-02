import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

const Hello = () => {

    return (
        <section className="hello__section mobile" id="header">
            <div className="background__image"></div>
            <div className="hello__section--position container--section">
                <div className="hello__section--hello">
                    <div className="main--txt">
                        <h1 className="name">Your bussiness at a higher level</h1>
                        <h2 className="role">websites, web apps, branding</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hello;