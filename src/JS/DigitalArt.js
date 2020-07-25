import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import ReactPlayer from 'react-player';
import videoDraw1 from './videos/video1.mp4';

const DigitalArt = () => {

    const [imgToShow, setImgToShow] = useState(null);

    const handleImgClick = (e) => {
        if (e.target.id === "draw1") {
            setImgToShow("draw1");
        } else if (e.target.id === "draw2") {
            setImgToShow("draw2");
        } else if (e.target.id === "draw3") {
            setImgToShow("draw3");
        } else if (e.target.id === "close-box") {
            setImgToShow(null);
        }
    }

    return (
        <section className="content__section" id="digital">
            <div className="content__section--position container--section">
                <h3>DIGITAL ART</h3>
                <span className="decoration"></span>
                <div className="projects-main-box">
                    <div className="project-box draw1" onClick={ handleImgClick } id="draw1"></div>
                    <div className="project-box draw2" onClick={ handleImgClick } id="draw2"></div>
                    <div className="project-box draw3" onClick={ handleImgClick } id="draw3"></div>
                </div>
            </div>
            <ShowArt imgToShow={ imgToShow }/>
            <div className="close-box" id="close-box" onClick={ handleImgClick }></div>
        </section>
    );
};

const ShowArt = ({ imgToShow }) => {

    if (imgToShow === "draw1") {
        console.log(imgToShow)
        return (
            <div className="show-art">
                <div className="art-box img1"></div>
                <div className="art-box video">
                    <ReactPlayer url='https://youtu.be/FEKXp0vTa08' width='100%' height='100%' controls={ true } />
                </div>
                
            </div>
        );
    } else if (imgToShow === "draw2") {
        console.log(imgToShow)
        return (
            <div className="show-art">
                <div className="art-box img2"></div>
                <div className="art-box video">
                    <ReactPlayer url='https://youtu.be/M_UFQkj6cmw' width='100%' height='100%' controls={ true } />
                </div>
                <div className="close-box"></div>
            </div>
        );
    } else if (imgToShow === "draw3") {
        console.log(imgToShow)
        return (
            <div className="show-art">
                <div className="art-box img3"></div>
                <div className="art-box video">
                    <ReactPlayer url='https://youtu.be/8fnuJtbj2Fg' width='100%' height='100%' controls={ true } />
                </div>
                <div className="close-box"></div>
            </div>
        );
    } else {
        return null
    }
    
}

export default DigitalArt;