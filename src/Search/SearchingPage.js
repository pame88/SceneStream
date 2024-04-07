
import React, { useState } from "react";

import {Link}
from "react-router-dom";

import '../css/JamFeed.css';
import '../css/style.css';


import {JamPostsData} from "../Feed/FeedData"
import Header from "../AppComponents/Header.js";
import Search from "../AppComponents/Search.js";
import Toggles from "../Feed/Toggles.js";
import Footer from "../AppComponents/Footer";

import LocationToggles from "../Feed/LocationToggles.js";
import LocationToggle from "../Feed/LocationToggle.js";

import Posting from "../Feed/Posting";




export default function SearchingPage () { /* the function for the discography section */

  const allCategories=[...new Set(Object.values(JamPostsData).map((z) => z.category))];
  const [currentCat, setCurrentCat]=useState("NoCat") /* use this category at first */

  const allLocations=[...new Set(Object.values(JamPostsData).map((z) => z.location))];
  const [currentLocation, setCurrentLocation]=useState("NoLocation") /* use this category at first */

  const currentProjects=Object.values(JamPostsData).filter((newProject) => { /* getting an array of project values based on toggle clicked */
  return newProject.category === currentCat &&  newProject.location === currentLocation; 
});

    let RecentSearches 

    if (currentCat === "NoCat"){
        RecentSearches = "show-recents"
    } else {
        RecentSearches = "hide-recents"
    }


  return (
    <div>
        <Header />
       
        <div className="page-content">
            <Link to="/Search">
                <Search />
            </Link>
            <div>
                <div className="section-title">Post Type</div>
                <Toggles currentCat={currentCat} setCurrentCat={setCurrentCat} allCategories={allCategories} />  {/* render toggles */}
            </div>

            <div>
                <div className="section-title">Location</div>
                <LocationToggles currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} allLocations={allLocations} />  {/* render toggles */} 
            </div>

            <div className={RecentSearches}>
                <div className="section-header">
                    <div className="section-title">Recent Searches</div>
                    <div className="see-all">Clear</div>
                </div>

                <div className={"recent-searches"} id="recentSearches">
                        <div>Boston</div>
                        <div>Boston Bands</div>
                        <div>Punk</div>
                        <div>DIY Punk Comp</div>
                </div>
                
            </div>

            <div>

                {currentProjects.map(p => {
                
                return <Posting {...p}/> /* create project entries based on the projects in currentProjects, and put them in flex box */
                
                })
                }

            </div>
            <Footer />
        </div>
    </div>
  );
}

