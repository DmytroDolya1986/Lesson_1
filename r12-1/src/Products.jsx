import React from "react";
import {Link} from "react-router-dom";

function Products () {
    return (
        <div className="page__content">
            <h1>PrOdUcTs</h1>
            <p>We willl add some products later...</p>
            <Link to="/contacts">Contacts</Link> 
        </div>
     );
};

export default Products;
