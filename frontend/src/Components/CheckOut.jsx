import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styles from './CheckOut.module.css'

function CheckOut(  ) {
    const history = useHistory()
   // console.log(history)
    const [totalPrice, setTotalPrice] = useState(100)
    useEffect(() => {
        fetchTotalPrice()
    },[])
    async function fetchTotalPrice() {
        const { data } = await axios.get("http://localhost:1234/cart")
        console.log(data,"data")
        const tPrice = data.map((item) => item.quantity*item.productId.price).reduce((acc,item)=>acc+item,0)
        console.log(tPrice,"tPrice")
        setTotalPrice(tPrice)
    }
 /*   const totalPrice = parseParams(history?.location?.search?.slice(1))?.tota
    function parseParams(querystring) {
        return querystring.split("&").reduce((acc, item) => {
            let [key,value]=item.split("=")
            acc[key] = value
            return acc
        },{})
    }*/
    return (
        <div>
            <div className={styles.page}>
            <div className={styles.left}>
                    <div className={styles.head}>KEPNITZ</div>
                    <div className={styles.info}>
                        <div>Cart</div>
                        <div>Information</div>
                        <div>Shipping</div>
                        <div>Payment</div>
                    </div>
                    <div>Express Checkout</div>
                    <div className={styles.box}>
             <img src="https://www.mixdexhq.com/wp-content/uploads/shop-pay.jpg" alt="/" />
             <img src="https://i.pinimg.com/originals/af/eb/39/afeb399e555138f924aef7df19bc1511.png" alt="/" />         
             <img src="https://www.braintreepayments.com/images/logos/payment-methods/paypal-logo-block.svg" alt="/" />
             <img src="https://images.hindustantimes.com/tech/img/2020/08/29/960x540/google_pay_official_1598685711576_1598685719525.jpg" alt="/" />
                        
            </div>

                    <div className={styles.box1}></div>
                    <div className={styles.contact}>
                        <div>Contact Information</div>
                        <div className={styles.acc}>
                            <div>Already have an account?<span>Log in</span></div>
                        </div>
                    </div>
                    <input type="text" className={styles.email} placeholder="Email" />
                    <div className={styles.ship}>Shipping Address</div>
                    <br/>
                    <div className={styles.Names}>
                        <input type="text" className={styles.Fn} placeholder="First Name" />
                         <input type="text" className={styles.Fn} placeholder="Last Name" />
                    </div>
                    <input type="text" className={styles.email} placeholder="Company(optional)" />
                    <div className={styles.country}>
                        <input type="text" className={styles.Fn1} placeholder="Country" />
                        <input type="text" className={styles.Fn1} placeholder="Pincode" />
                        <input type="text" className={styles.Fn1} placeholder="State" />
                    </div>
                    <input type="text" className={styles.email} placeholder="City" />
                    <input type="text" className={styles.email} placeholder="Address" />
                    <input type="text" className={styles.email} placeholder="Apartment " />
                    <input type="text" className={styles.email} placeholder="Phone " />
                    
                    <div  className={styles.shopmain}>
                    <button className={styles.shopreturn}>Return to Cart</button>
                        <button className={styles.shop}>Continue to Shopping</button>
                        </div>
                </div>
                
            <div className={styles.right}>
                    {/* <h1>RATES</h1> */}
                    <div>

                    </div>
                    <div className={styles.payment}>
                    <input type="text" placeholder="Discount Code" />
                        <button>Apply</button>
                    </div>
                    <h3>SubTotal: {totalPrice}</h3>
                    <h2>Total Amount: {totalPrice}</h2>
                </div>
                </div>
        </div>
    )
}

export default CheckOut
