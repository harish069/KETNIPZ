import React from 'react'
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Cart.module.css";
import { CartComponent } from './CartComponent';
import { Link } from 'react-router-dom';

function Cart() {
    const params = useParams();
  //console.log(params);

  const [pro, setPro] = useState([]);
  const [total, setTotal] = useState(0);
 // console.log(pro, "this pavan");
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let { data } = await axios.get("http://localhost:1234/cart");
    //console.log("databefore", data);
    data = data.map((item) => {
      item.productId.quantity = item.quantity
      item.productId.cartId=item._id
      return item.productId
    })
    console.log("dataafter", data);
    let price = 0;
    data.forEach((item) => {
      price += (item.quantity===undefined?1:item.quantity*item.price);
    })
     //console.log(data);
    setPro(data);
    setTotal(price);
  }
 console.log(pro,"product");
  async function handleClick(id) {
    console.log(id,"id harish");
    await axios.delete(`http://localhost:1234/cart/${id}`)
    console.log("delete req sent ")
      getData()
  };
  
  // const handleClick = (id) => {
  //       axios.delete(`http://localhost:1234/cart/${id}`).then((res) => {
  //           const del = pro.filter((item) => id !== item._id);
  //           setPro(del);
  //           //  setList(del);
  //       })
  //   };
  
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
          return <CartComponent pro ={item} handleClick={handleClick} />
        })}
           <div className={styles.bottom}>
                <div>SUBTOTAL ₹{total}.00</div>
                <br/>
                <div>Shipping & taxes calculated at checkout</div>
                <br/>
          <Link to={`/checkout?total=${total}`}><button className={styles.btn}>CHECK OUT</button></Link>
                </div>
        </div>
    )
}

export default Cart
