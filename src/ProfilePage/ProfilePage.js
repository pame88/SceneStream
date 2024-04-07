// import '../css/JamFeed.css';
import '../css/style.css';

import React from 'react';

import Footer from "../AppComponents/Footer.js";
import Header from "../AppComponents/Header.js";
import Artists from "../AppComponents/Collections.js"
import People from "../AppComponents/People.js"


export default function ProfilePage() { /* function for compiling the whole profile page*/
    return (
      <div>
        <Header />
        <div className="page-content">


        <div>
          <div className="section-header">
            <div className="section-title">Following</div>
            <div className="see-all">See all</div>
          </div>
          <People />
        </div>

      
        <div>
          <div className="section-header">
            <div className="section-title">Your Collections</div>
            <div className="see-all">See all</div>
          </div>
          <Artists />
        </div>

        <div>
          <div className="section-header">
            <div className="section-title">Saved Collections</div>
            <div className="see-all">See all</div>
          </div>
          <Artists />
        </div>
        
        </div>
        <Footer />
      </div>
    );
   
}