import React from 'react'
import styles from "./Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import ShopAll from './ShopAll';


function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData()
    }, [])
    
    async function getData()
    {
        const { data } = await axios.get("http://localhost:1234/prod")
        console.log(data);
        //setTimeout(() => {}, 1000)   
        setProducts(data)
    }

    return (
        <div>

            <img className={styles.gif} src="https://cdn.shopify.com/s/files/1/2028/6907/files/fall_promo_banner_V2_1512x.gif?v=1634922078" alt="/" />
            
            <div >
                {console.log("Products: ", products)}
                    <div className={styles.dresses}>
                    {products.map((item) => {
                        return (
                            <div  >
                                <Link className={styles.text} to={`products/${item._id}`}>
                             <div className={styles.block}>
                                <div> <img className={styles.dress} src={item.image} alt="sunil" /></div>
                                <div>{item.title}</div>
                                <br/>
                                <div>₹{item.price}</div>
                            </div>
                            </Link>
                                    </div> 
                            )
               })}
               </div> 
            </div>
        </div>
       
    )
}

export default Home
