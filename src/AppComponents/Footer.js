
import '../css/style.css';

import {Link}
from "react-router-dom";

import { useLocation }
from "react-router-dom";

import React,{useState} from 'react';

export default function Footer() { /* A function for the about section of the profile page */

   

   
    
    return (
        // <div className="footer">
            <div className="menu">
                <Link to="/">
                    <img className="footer-icon" src="/SceneStream/content/Images-Footer/pin.png"></img>
                </Link>

                <Link to="/Search">
                    <img className="footer-icon" id="searchIcon" src="/SceneStream/content/Images-Footer/search.png" />
                </Link>

                <Link to="/Add">
                    <img className="footer-icon" src="/SceneStream/content/Images-Footer/post.png"></img>
                </Link>

                {/* <Link to="/Add"> */}
                    <img className="footer-icon" src="/SceneStream/content/Images-Footer/radio.png"></img>
                {/* </Link> */}

                <Link to="/Profile">
                    <img className="footer-icon" src="/SceneStream/content/Images-UI/user.png"></img>
                </Link>
            </div>

        // </div>

    );

};
