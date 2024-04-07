import '../css/style.css';
import '../css/JamFeed.css';

import {ChatData} from './ChatData'
import Chat from "./Chat.js";


// import React,{useState} from 'react';

export default function Chats() { /* */

const Chats = Object.values(ChatData)

    return (
        <div className="chats">
            {Chats.map(p => {
              
              return <Chat {...p}/> /* create project entries based on the projects in currentProjects, and put them in flex box */
              
            })
            }
            
        </div>
    );

};
