import React from "react";
import { Route, Link, Routes} from "react-router-dom";
import Product from "./Product";

function Products ({ match }) {
    return (
        <div className="page__content">
            <h1>PRODUCTS</h1>
            <ul className="navigation__in">
                <li className="navigation__item--in">
                    <Link to={`${match}/ball`}>BALL</Link>
                </li>
                <li className="navigation__item--in">
                    <Link to={`${match}/book`}>BOOK</Link>
                </li>
            </ul>
            <Routes>
                <Route path="*" element={<span>Select a Product Please...</span>} />
                <Route path={`${match}/:productId`} element={<Product />} />
            </Routes>
        </div>
     );
};

export default Products;
