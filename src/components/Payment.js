import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Payment.css';
import { useStateValue } from '../state/StateProvider';
import CheckoutProduct from './CheckoutProduct';



function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout" >{basket?.length}</Link>) items
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>calle 44 # 123-12</p>
                        <p>Barranquilla, Colombia</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {
                            basket.map(item =>(
                                <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                            ))
                        }
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
