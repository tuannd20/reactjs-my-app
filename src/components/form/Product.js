import React, { useState } from "react";
import "./FormStyles.css";
import Modal from "./Modal";

function Product() {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal((modal) => !modal);
  };

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
              <button onClick={handleOpenModal}>Add more</button>
            </option>
          </select>
        </div>
      </div>
      {modal === true && <Modal />}
    </div>
  );
}

export default Product;
