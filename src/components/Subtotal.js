import React from 'react'
import { useHistory } from "react-router-dom";

import '../styles/Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../state/StateProvider';
import { getBasketTotal } from '../reducer/reducer';

function Subtotal() {
//   const history = useHistory();
const [{ basket }, dispatch] = useStateValue();

const history = useHistory();

return (
    <div className="subtotal">
    {/* recordar estudiar mejor la documentacion o reglas de currencyFormat */}
    <CurrencyFormat
        renderText={(value) => (
        <>
            <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
            </small>
        </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
    />

    <button onClick={ e => history.push('/payment') }  >Proceed to Checkout</button>
    </div>
);
}

export default Subtotal;