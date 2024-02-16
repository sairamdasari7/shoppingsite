import React, { Component } from "react";
import Header from "../Header";
import "./index.css"; // Import CSS file for styling

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      total: 0,
    };
  }

  render() {
    const { cartItems, total } = this.state;

    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="cart-page">
          <h2>Cart Page</h2>
          <div className="cart-items">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              ))
            ) : (
              <p>No items in cart</p>
            )}
          </div>
          <div className="total">Total: ${total}</div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    );
  }
}

export default CartPage;
