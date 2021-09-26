import React from 'react'

import '../styles/Subtotal.css'
import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./reducer";
// import { useHistory } from "react-router-dom";

function Subtotal() {
//   const history = useHistory();
//   const [{ basket }, dispatch] = useStateValue();

return (
    <div className="subtotal">
    {/* recordar estudiar mejor la documentacion o reglas de currencyFormat */}
    <CurrencyFormat
        renderText={(value) => (
        <>
            <p>
                Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
            </small>
        </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
    />

    <button>Proceed to Checkout</button>
    </div>
);
}

export default Subtotal;