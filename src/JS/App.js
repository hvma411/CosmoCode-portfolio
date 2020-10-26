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
import Footer from './Footer';
import Privacy from './Privacy';

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <Header />
                <Main />
            </Route>
            <Route path="/privacy">
                <Header />
                <Privacy />
                <Footer />
            </Route>
        </BrowserRouter>

    )
}

ReactDOM.render(
    <App />, document.getElementById("app")
)