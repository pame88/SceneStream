
import '../css/ProfilePage.css';
import '../css/JamFeed.css';

import { useNavigate } from "react-router-dom";

import {ArtistData} from "../ProfilePage/ProfilePageData"

import { useLocation }
  from "react-router-dom";

import ArtistProfileHeader from "./ArtistProfileHeader";


export default function ArtistProfilePage() { /* template for a project paage that will be filled with different content */

  const { search }=useLocation();
  const query=new URLSearchParams(search);
  const name=query.get("name"); /* retrieve project name from URL */

  const currentArtist=ArtistData[name]; /* set current project to that project */

  const navigate = useNavigate();

  return (

    <div>
      <button className="back-button"  onClick={() => navigate(-1)}>
        <img className="back-btn-image" src="/SceneStream/content/Images-UI/back.png"></img>
      </button>

       <ArtistProfileHeader  name={name} profileURL={"/SceneStream/content/" + currentArtist.profileURL} />

      </div>

  );

}