import React, { Component } from "react";
import Header from "../Header";
import "./index.css";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ products: data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { products, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <h1 className="product-main-heading">All Products</h1>
          <div className="product-list">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
