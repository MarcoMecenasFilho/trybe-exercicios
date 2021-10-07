// arquivo Order.js
import React from 'react';
import propTypes from 'prop-types'

class Order extends React.Component {
  render() {
    const { users, product, price} = this.props

    return (
      <div>
        <p> {users} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  } 
}
 
Order.propTypes = {
  users: propTypes.string,
  product: propTypes.string,
  price: propTypes.shape({
    value: propTypes.number,
    currency: propTypes.string
  }),
};

export default Order;