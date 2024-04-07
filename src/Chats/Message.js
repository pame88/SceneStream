
import '../css/style.css';
import '../css/chats.css';


// import React,{useState} from 'react';

export default function Message (props) { /* */

    return (
            // <div className="message">
            //     <img className="concert-chat-pic" src = {"/SceneStream/content/" + props.profileURL} />
            //     <div className="concert-chat-name">{props.name}</div>
            //     <div className="concert-chat-preview">{props.message}</div>

            // </div>

            <div className="message">
            <div className="reply-message-profile">
                    <img className="concert-chat-pic" src = {"/SceneStream/content/" + props.profileURL} />
                    <div className="concert-chat-name">{props.name}</div>
            </div>
            <div className="concert-chat-preview">{props.message}</div>
            </div>

    );

};