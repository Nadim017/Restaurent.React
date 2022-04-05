import React from "react";
import "./Restaurent.css";

const Cart = ({ menu }) => {
  return (
    <>
      <div className="main-div">
        {menu.map((element) => {
          const { id, name, category, description, img, price } = element;
          return (
            <>
              <div className="container" key={id}>
                <p>
                  <span className="number">{id}</span>
                </p>
                <h3>{category}</h3>
                <h1>{name}</h1>
                <p> {description}</p>
                <p>
                  <h1>
                    <span>{price}$</span>
                  </h1>
                </p>
                <div className="img-div">
                  <img className="img-item" src={img} alt="" />
                </div>
                <div>
                  <br />
                  <button className="btn" target="_blank">
                    Order Now
                  </button>
                </div>
              </div>
            </>
          );
        })}{" "}
      </div>
    </>
  );
};

export default Cart;
