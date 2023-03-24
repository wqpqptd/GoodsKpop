/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
  return (
    <div className="col-3">
        <div className="product-card">
            <div className="product-image">
                <img src="images/watch.jpg" alt="product image"/>
            </div>
            <div className="product-details">
                <h6 className="brand">Havel</h6>
                <h5 className="product-title">
                    Kid Headphone bala bala bala
                </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                />
                <p className="price">$100.00</p>
            </div>
        </div>
    </div>
  );
}

export default ProductCard;