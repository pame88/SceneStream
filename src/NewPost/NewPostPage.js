import React, { useState } from "react";

import {Link}
from "react-router-dom";

import '../css/JamFeed.css';
import '../css/style.css';


import AltHeader from "../AppComponents/AltHeader.js";
import Footer from "../AppComponents/Footer.js";
import Items from "../NewPost/Items.js";
import ItemTag from "../NewPost/Items.js";
import Caption from "../NewPost/Caption.js";



export default function NewPostPage () { /* the function for the discography section */

  return (
    <div>
        <AltHeader title="New Post" />

        <div className="page-content">
          
          <Items />
          <Caption />

          <button className="upload-btn">Upload</button>
        </div>
        <Footer />
    </div>
  );
}

