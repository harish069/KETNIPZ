import React from 'react'
import { useHistory, useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./SingleProduct.module.css";
import { Link } from "react-router-dom";

function SingleProduct() {
  const params = useParams();
  //console.log(params);
 const history=useHistory()
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  function handleQuantity(num) {
    setQuantity(quantity+num)
  }
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await axios.get(`http://localhost:1234/prod/${params.id}`);
     console.log(data);
    setProduct(data);
  }

  async function cartData() {
    const payload = { productId : params.id,quantity:quantity }
    const response = await axios.post('http://localhost:1234/cart', payload);
    history.push("/product/cart")
    console.log("response", response);
}
  // getData()

    return (
        <div>
           
    <div className={styles.block}>
                <div >
                    <div className={styles.head}>
                    <div>Home</div>
                    <div>Shop All</div>
                        <div>{product.title}</div>
                        </div>
        <img className={styles.image} src={product.image} alt='/' />
        </div>

                <div className={styles.box2}>
                    <div>₹{product.price}.00</div>
                    <div>OR 4 INTEREST-FREE INSTALLMENTS OF ₹15.00 BY</div>
                    <img src={"https://static.afterpay.com/integration/product-page/logo-afterpay-colour.png" } alt="/" />
                    <br />
                    <br />
                    <br />
                    <div className={styles.proname}>{product.title}</div>
                    <br />
                    <br />
                    <br />
                    <ul>
                        <li>{product.desc1}</li>
                        <br/>
                        <li>{product.desc2}</li>
                        <br/>
                        <li>{product.desc3}</li>
                        <br/>
            </ul>
            <section>
              <div className={ styles.quantityDiv}>
                <button onClick={() => handleQuantity(-1)} disabled={ quantity===1?true:false}>-</button><span>{quantity}</span><button onClick={()=>handleQuantity(1)}>+</button>
              </div>
            </section> 
                    <br />
                    <br />
                    <div>SIZE</div>
                    <br/>
                    <select className={styles.select}>
                        <option>small</option>
                        <option>medium</option>
                        <option>large</option>
                         <option>X large</option>
                    </select>
                    <br />
                    <br />
                    <br />
            <button onClick={() => cartData()} className={styles.bt}>ADD TO CART ₹{quantity*product.price}.00</button>
                </div>
    </div>
                    
    </div>

    )
}

export default SingleProduct

// ${product._id}
// `/products/cart/${product._id}`