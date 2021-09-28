import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CardElement } from '@stripe/react-stripe-js';
// useStripe, useElements


import '../styles/Payment.css';
import { useStateValue } from '../state/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer/reducer';
import axios from 'axios';



function Payment() {

    const [{ basket, user }, ] = useStateValue();
    const history = useHistory();


    // const stripe = useStripe();
    // const elements = useElements();

    // const [succeeded, setSucceeded] = useState(false);
    // const [processing, setProcessing] = useState('');
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret which allows us   to charge a customer
        const getClientSecret = async() =>{
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();

    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)

    const handleSubmit = async(event) => {
        // //do all the fancy stripe stuff....
        // event.preventDefault();
        // setProcessing(true);

        // const payload = await stripe.confirmCardPayment(clientSecret,{
        //     payment_method:{
        //         card: elements.getElement(CardElement)
        //     }
        // }).then(({ paymentIntent })=>{
        //     //paymentIntent= payment confirmation

        //     setSucceeded(true);
        //     setError(null);
        //     setProcessing(false);

        //     history.replaceState('/orders')
        // } )

        history.replaceState('/')
    }

    const handleChange = event => {
        //Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        console.log(disabled)
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

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
                        <form onSubmit={ handleSubmit }>
                            <CardElement onChane={ handleChange }/>
                            <div className="payment__priceContainer">
                            <CurrencyFormat
                            renderText={(value) => (
                                <h3>Order Total:{ value }</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            />
                            {/* <button disable={ processing || disabled || succeeded }>
                                <span>{ processing ? <p>Processing</p> : "Buy Now" }</span>
                            </button> */}
                            <button
                            className="payment__details-btn"
                            onClick={ e => history.push('/') } >
                                <span>Buy Now</span>
                            </button>
                            </div>
                            {error && <div>{ error }</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
