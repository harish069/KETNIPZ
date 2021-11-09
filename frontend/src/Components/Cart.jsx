import React from 'react'
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Cart.module.css";
import { CartComponent } from './CartComponent';

function Cart() {
    const params = useParams();
  //console.log(params);

  const [pro, setPro] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let { data } = await axios.get("http://localhost:1234/cart");
    console.log("databefore", data);
    data = data.map((item) => {
      item.productId.quantity=item.quantity
      return item.productId
    })
    console.log("dataafter", data);
    let price = 0;
    data.forEach((item) => {
      price += (item.quantity===undefined?1:item.quantity*item.price);
    })
     console.log(data);
    setPro(data);
    setTotal(price);
  }
  
  // getData()

    return (
      <div>
          <div className={styles.your}>YOUR CART</div>
            <br />
            <br/>
            <div className={styles.line2}>
                <div></div>
                <div></div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
            </div>
        {pro.map((item) => {
          return <CartComponent pro ={item} />
        })}
           <div className={styles.bottom}>
                <div>SUBTOTAL ₹{total}.00</div>
                <br/>
                <div>Shipping & taxes calculated at checkout</div>
                <br/>
                <button className={styles.btn}>CHECK OUT</button>
                </div>
        </div>
    )
}

export default Cart
