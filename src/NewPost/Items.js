import React, { useState } from "react";

import '../css/JamFeed.css';
import '../css/style.css';
import '../css/ProfilePage.css';

import {ItemData} from "./NewPostData"


import ItemTag from "./ItemTag";


export default function Items () { /* the function for the discography section */

  const items=Object.values(ItemData)

  return (
    <div>

      <div className="section-title">Link To Playlist:</div>

      <div className="items" >
          {items.map(p => {
            
            return <ItemTag {...p}/> /* create project entries based on the projects in currentProjects, and put them in flex box */
            
          })
          }
          
      </div>

    </div>
  );
}


