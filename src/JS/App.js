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

const App = () => {
    return (
        <div>Hello World!</div>
    )
}

ReactDOM.render(
    <App />, document.getElementById("app")
)