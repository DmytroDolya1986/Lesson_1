import React, { Component } from 'react';
import ProductsList from './ProductsList';
import CartTitle from './CartTitle';

class ShoppingCart extends Component {
  render() {
    return (
      <div className='column'>
        <CartTitle userName={this.props.userData.firstName} count/>
        <ProductsList />
      </div>
    )
  }
}

export default ShoppingCart;