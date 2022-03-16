import React from "react";
import { useParams } from "react-router-dom";


function Product () {
    const { productId } = useParams();
    return (
        <div className="product">
            {`Prorduct is a ${productId}`}
        </div>
     );
};

export default Product;
