
import '../css/style.css';

import {Link}
from "react-router-dom";

export default function AltHeader({title}) { /* A function for the about section of the profile page */

    return (
        <div className="alt-header">
            <div>{title}</div>
        </div>
    );

};