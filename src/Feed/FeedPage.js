import '../css/JamFeed.css';
import '../css/style.css';

import React from 'react';

import Feed from "./Feed.js";
import Footer from "../AppComponents/Footer.js";
import Header from "../AppComponents/Header.js";
import Search from "../AppComponents/Search.js";





export default function JamPage() { /* function for compiling the whole profile page*/
    return (
      <div>
        <Header />

        <div className="page-content feed">
  
            <Feed />
        
        </div>
        
        <Footer />
      </div>
    );
   
}
