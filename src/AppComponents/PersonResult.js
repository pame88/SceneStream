
import '../css/style.css';
import '../css/ProfilePage.css';


// import React,{useState} from 'react';

export default function PersonResult (props) { /* */

    return (

            <div className="person-result">

                <div className="person-result info">
                    <img className="person-img" src={"../SceneStream/content/" + props.profileURL} />
                    <div className="person-name"><span>{props.name}</span></div>
                </div>
                <img className="ellipsis" src={"../SceneStream/content/Images-UI/ellipsis.png"} />

                
            </div>

    );

};