import React, { useState } from 'react'

function CartComponent2({ cartnumber, handleQuantity, price, pout }) {
    const [cart, setCart] = useState(cartnumber);
    console.log(handleQuantity);
    const addFunc = (val) => {
        setCart(cart+val)
    }
    pout = cart * price;
    return (
        <div>
            <button onClick={() => addFunc(-1)}>-</button>
            <span>{ cart }</span>
            <button onClick={() => addFunc(+1)}>+</button>
            <div>{pout}</div>
        </div>
    )
}

export default CartComponent2
