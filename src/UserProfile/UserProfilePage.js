
import '../css/ProfilePage.css';
import '../css/JamFeed.css';


import React, { useState } from 'react';

import {ListeningData} from "../Feed/FeedData"

import { useLocation }
  from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Posting from "../Feed/Posting"

import Person from "../AppComponents/Person"
import Artist from "../AppComponents/Collection"

import AltHeader from '../AppComponents/AltHeader.js';
import UserProfileHeader from "./UserProfileHeader";
import Footer from '../AppComponents/Footer.js';


export default function UserProfilePage() { /* template for a project paage that will be filled with different content */

  const { search }=useLocation();
  const query=new URLSearchParams(search);
  const name=query.get("name"); /* retrieve project name from URL */

  const currentProfile=ListeningData[name]; /* set current project to that project */

  const navigate = useNavigate();

  return (

    <div>

      <button className="back-button"  onClick={() => navigate(-1)}>
        <img className="back-btn-image" src="/SceneStream/content/Images-UI/back.png"></img>
      </button>
    
      <AltHeader title={name}  />
      
      <div className="page-content">
        <UserProfileHeader  name={name} mutuals={currentProfile.mutuals} profileURL={"/SceneStream/content/" + currentProfile.profileURL}   />
      
        <div>
            <div className="section-title">Listening To:</div>
            <span className="listening-to">
              {currentProfile.song} {currentProfile.artist}             
              <img className="listening-icon" src="/SceneStream/content/Images-UI/sound-waves.png"></img>
            </span>
        </div>

        <div>
          <div className="section-header">
            <div className="section-title">
              <span>{currentProfile.friendNumber} Friends</span>
              <span className="header-mutual">({currentProfile.mutuals} mutual)</span>
            </div>

            <div className="see-all">See all</div>
          </div>
          <div className="profile-row" >
              {currentProfile.friends.map(p => {
                    
                return <Person {...p}/> /* create project entries based on the projects in currentProjects, and put them in flex box */
                    
                })
              }
                  
          </div>
        </div>

        <div>
          <div className="section-title">
            <span>Top 5 Artists</span>
            <span className="header-mutual">(1 mutual)</span>
          </div>

          <div className="profile-row" >
              {currentProfile.artists.map(p => {
                    
                  return <Artist {...p}/> /* create project entries based on the projects in currentProjects, and put them in flex box */
                    
                  })
              }
                  
          </div>
        </div>
            
        <div>
         
          
          <div className="section-title">Posts</div>
          <div className="profile-row">
            {currentProfile.posts.map(p => {
                
                return <Posting {...p}/> /* create project entries based on the projects in currentProjects, and put them in flex box */
                
              })
              }
          </div>
        </div>

      </div>

      <Footer />
      </div>
  );

}