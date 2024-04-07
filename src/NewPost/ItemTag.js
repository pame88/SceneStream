
import SearchPage from '../Search/SearchPage';
import '../css/style.css';
import '../css/NewPost.css';

import {Link}
from "react-router-dom";

export default function ItemTag (props) { /* A function for the about section of the profile page */

    return (
       
        <Link to="/Link">
            <div className="item-tag" style={{ backgroundImage: `url(${"/SceneStream/content/" + props.profileURL})` }}>
                <div>{props.title}</div>
                <img className="item-tag-chevron" src="/SceneStream/content/Images-UI/taggpplbtnwhite.png"></img>
            </div>

        </Link>

    );

};