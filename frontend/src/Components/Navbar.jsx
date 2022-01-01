import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div>
            <div className={styles.ash}>
          <Link to="/login"><div><img src="https://cdn.shopify.com/s/files/1/2028/6907/t/20/assets/account.svg?v=12004411014542840411"  alt="/"/></div></Link>
                <div >OFFICIAL KETNIPZ ONLINE STORE</div>
                </div>
        <div className={styles.bar}>
            <div >
                <Link className={styles.text} to="/">
                    <img src="https://cdn.shopify.com/s/files/1/2028/6907/files/Ketnipz_Header_550x_dd3e502e-9e2e-4ad6-8c4d-e7cadd42b578_130x.gif?v=1592267404" alt="/"/>
                </Link>
                    </div>
            <div className={styles.headings}>
            <Link className={styles.text} to="/home">HOME</Link>
            <Link className={styles.text} to="/shopAll">SHOPALL</Link>
            <Link className={styles.text} to="/apparel">APPAREL</Link>
            <Link className={styles.text} to="/accessories">ACCESSORIES</Link>
            <Link className={styles.text} to="/cart">CART</Link>
            </div>
            </div>
        </div>
    )
}

export default Navbar
