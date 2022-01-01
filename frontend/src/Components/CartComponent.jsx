import React from 'react'
import styles from "./Cart.module.css";
import axios from "axios";

export const CartComponent = ({ pro, handleClick }) => {
    //console.log(pro, "pro")

    return ( 
        <div>
            <br />
            <div className={styles.line3}>
                <img className={styles.cartimage}src={pro.image} alt="/" />
                <div>{pro.title}</div>
                <div>₹{pro.price}.00</div>
                <div>{ pro.quantity}</div>
                <div>₹{pro.quantity * pro.price}.00</div>
                <button onClick ={() => handleClick(pro.cartId)} className={styles.del}>delete</button>
            </div>
            <br />
        </div>
    )
}
