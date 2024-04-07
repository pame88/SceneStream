import React, { useState } from "react";


export default function LikeButton() {

   const [liked, setLiked] = useState(false);

   return (
      <button
         className="post-UI-button"
         onClick={() => {
            setLiked(prevMode => !prevMode)
         }}
      > 
        <img className="post-UI-image" src={liked ? "../SceneStream/content/Images-UI/likedheart.png" : "../SceneStream/content/Images-UI/heart.png"} />
      </button>
   );
}

