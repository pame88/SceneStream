import React, { useState } from "react";

import '../css/JamFeed.css';
import '../css/style.css';

import {JamPostsData} from "../Feed/FeedData"
import AltHeader from "../AppComponents/AltHeader.js";
import Search from "../AppComponents/Search.js";
import Toggles from "../Feed/Toggles.js";
import LocationToggles from "../Feed/LocationToggles";
import Footer from "../AppComponents/Footer.js";

import Artists from "../AppComponents/Collections.js"

import People from "../AppComponents/People.js"

import { useNavigate } from "react-router-dom";


export default function LinkSearch () { /* the function for the discography section */


  const navigate = useNavigate();

 

  return (
    <div>

      <button className="back-button"  onClick={() => navigate(-1)}>
        <img className="back-btn-image" src="/SceneStream/content/Images-UI/back.png"></img>
      </button>

        <AltHeader title="Link To:" />
       
        <div className="page-content">

          <Search />

          <div>
            <div className="section-title">Recently Played</div>
            <Artists />
          </div>


          <div>
            <div className="section-title">Friends</div>
            <People />
          </div>

        </div>
    </div>
  );
}

