import React from 'react'

import '../styles/Product.css'

function Product() {
    return (
        <div className="product" >
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                </div>
            </div>
            <img
                src="https://pm1.narvii.com/6808/39bc79db94962d39a99ec2efd636f1b9984bbe3bv2_hq.jpg"
                alt="product"
            />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
