import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
// import { Provider } from 'react-redux'
// import { connect } from 'react-redux'
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import { fire, db } from '../config/Fire';
// import '../scss/main.scss';

// import store from './ReduxStore';

import '../scss/main.scss';
import Header from './Header';
import AboutMe from './About';

const App = () => {
    return (
        <HashRouter>
            <Header />
            <AboutMe />
        </HashRouter>

    )
}

ReactDOM.render(
    <App />, document.getElementById("app")
)