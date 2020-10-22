import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  BrowserRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import '../scss/main.scss';
import Header from './Header';
import Main from './Main';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Main />
        </BrowserRouter>

    )
}

ReactDOM.render(
    <App />, document.getElementById("app")
)