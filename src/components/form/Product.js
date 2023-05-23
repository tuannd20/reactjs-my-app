import React from "react";
import "./FormStyles.css";

function Product() {
  return (
    <div className="container">
      <div className="product-item">
        <div className="label">Name:</div>
        <input type="text" />
      </div>
      <div className="product-item">
        <div className="label">Phone number:</div>
        <input type="number" />
      </div>
      <div className="product-item">
        <div className="label">Position:</div>
        <div className="position-list">
          <select name="" id="">
            <option value="volvo">FE</option>
            <option value="saab">BE</option>
            <option value="fiat">DB</option>
            <option value="audi">BA</option>
            <option value="other">
              <button>Add more</button>
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Product;
