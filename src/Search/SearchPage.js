import React, { useState } from "react";

import {Link}
from "react-router-dom";

import '../css/JamFeed.css';
import '../css/style.css';

import {RecommendedArtistData} from "./SearchPageData"
import {RecommendedPeopleData} from "./SearchPageData"
import {RecommendedConcertData} from "./SearchPageData"

import {JamPostsData} from "../Feed/FeedData"
import Header from "../AppComponents/Header.js";
import Search from "../AppComponents/Search.js";
import Footer from "../AppComponents/Footer.js";

import Artist from "../AppComponents/Collection.js"
import Person from "../AppComponents/Person.js"



export default function SearchPage () { /* the function for the discography section */
  

  const RecommendedArtists=Object.values(RecommendedArtistData)
  const RecommendedPeople=Object.values(RecommendedPeopleData)


  return (
    <div>
        <Header />
       
        <div className="page-content">

        <Link to="/Searching">
          <Search />
        </Link>
          
          <div>
            <div className="section-title">Compilations For You</div>
            <div className="profile-row" >
              {RecommendedArtists.map(p => {
                    
                  return <Artist {...p}/> /* create project entries based on the projects in currentProjects, and put them in flex box */
                    
                  })
              }
                  
          </div>
          </div>

          <div>
            <div className="section-title">People You Might Know</div>
            <div className="profile-row" >
              {RecommendedPeople.map(p => {
                    
                  return <Person {...p}/> /* create project entries based on the projects in currentProjects, and put them in flex box */
                    
                  })
              }
                  
            </div>
          </div>

        </div>
        <Footer />
    </div>
  );
}

