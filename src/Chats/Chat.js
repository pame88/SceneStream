
import '../css/style.css';
import '../css/chats.css';


// import React,{useState} from 'react';

export default function Chat(props) { /* */

    return (
            <div className="chat">
                <img className="chat-pic" src = {"/SceneStream/content/" + props.profileURL} />
                <div className="chat-profile">
                    <div className="chat-name">{props.name}</div>
                    <div className="chat-preview">{props.preview}</div>
                </div>
            </div>

    );

};
