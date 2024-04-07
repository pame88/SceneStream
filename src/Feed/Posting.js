
import '../css/style.css';
import '../css/JamFeed.css';

import LikeButton from './LikeButton';
import ReplyButton from './ReplyButton';

import {Link}
  from "react-router-dom";

export default function Posting(props) { /* */

let link;
    
link=`/ReplyPage?title=${props.title}`

    return (
        <Link to={link}>
             <div className="post" >
             <div className="post-content" >
                <div className = "profile">
                            <img className = "profile-pic" src={"../SceneStream/content/" + props.profileURL} />
                            <div className="name">{props.name}</div> 
                </div>

                <div className="music-info">
                    <img className={props.image} src={"../SceneStream/content/" + props.imageURL} />
                    <div className="post-title">{props.title}</div>
                </div>

                <div className="post-info">

                <div className="post-caption">{props.caption}</div>

                <div className="post-replies">{props.replies}</div>

                </div>

                <div className="post-UI">
                    {/* <ReplyButton /> */}
                    <LikeButton />
                </div>
                </div>
                
            </div>
        </Link>
    );

};
