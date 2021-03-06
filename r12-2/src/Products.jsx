import React from "react";
import { Route, Link, Switch, useParams} from "react-router-dom";
import Product from "./Product";

function Products ({ match }) {
    return (
        <div className="page__content">
            <h1>PrOdUcTs</h1>
            <ul className="navigation__in">
                    <li className="navigation__item--in">
                        <Link to={`${match.url}/ball`}>Ba_LL</Link>
                    </li>
                    <li className="navigation__item--in">
                        <Link to={`${match.url}/book`}>Bo_ok</Link>
                    </li>
            </ul>
            <Switch>
                <Route exact path={match.url}>
                    <span>Select a product please...</span>
                </Route>
                <Route path={`${match.url}/:productId`}>
                    <Product />
                </Route>
                {/* <Route path={`${match.url}/:productId`}>
                    <Product/>
                </Route> */}

            </Switch>
        </div>
     );
};

export default Products;
