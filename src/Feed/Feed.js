import React, { useState } from "react";

import '../css/JamFeed.css';
import '../css/style.css';

import {JamPostsData} from "./FeedData"
import Posting from "./Posting";




export default function Feed () { /* the function for the discography section */

  const allCategories=[...new Set(Object.values(JamPostsData).map((z) => z.category))];
  const [currentCat, setCurrentCat]=useState("All") /* use this category at first */

  

  const currentProjects=Object.values(JamPostsData).filter((newProject) => { /* getting an array of project values based on toggle clicked */
    return newProject.category === currentCat; 
  });

  return (
    <div>

          {currentProjects.map(p => {
            
            return <Posting {...p}/> /* create project entries based on the projects in currentProjects, and put them in flex box */
            
          })
          }

    </div>
  );
}


