import React from "react";
import {Link} from "react-router-dom";

function PageNotFound () {
    return (
        <div className="page__content">
            <h1>404!!! Oooops something went wrong</h1>
            <Link to="/">HOME</Link> 
        </div>
     );
};

export default PageNotFound;

