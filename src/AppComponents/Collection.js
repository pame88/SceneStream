
import '../css/style.css';
import '../css/JamFeed.css';

import {Link}
from "react-router-dom";

// import React,{useState} from 'react';

export default function Artist(props) { /* */

let link;
    
link=`/ArtistProfile?name=${props.name}`


    return (

        <Link to={link}>
            <div className={`artist ${props.state}`} >

                <img className="collection-img" src={"../SceneStream/content/" + props.profileURL} />
                <div className="collection-name">{props.name}</div>
                
            </div>
        </Link>

    );

};
