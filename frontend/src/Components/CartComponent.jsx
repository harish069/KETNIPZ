import React from 'react'
import styles from "./Cart.module.css";

export const CartComponent = ({ pro }) => {
    console.log(pro, "pro")
    
    return (
        <div>
            <br />
            <div className={styles.line3}>
                <img className={styles.cartimage}src={pro.image} alt="/" />
                <div>{pro.title}</div>
                <div>₹{pro.price}.00</div>
                <div>{ pro.quantity}</div>
                <div>₹{pro.quantity * pro.price}.00</div>=
            </div>
            <br />
        </div>
    )
}
