import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.mainCont}>
        <div className={styles.mainDiv}>
            <div className={styles.div1}>
                <div>MAIN MENU</div>
                <div class={styles.line}></div>
                <div>HOME</div>
                <div>SHOPALL</div>
                <div>APPAREL</div>
                <div>ACCESSORIES</div>
            </div>
            <div className={styles.div1}>
                <div>MORE INFO</div>
                <div class={styles.line}></div>
                <div>SIZING CHARTS</div>
                <div>FAQ</div>
                <div>RETURN {`&`} EXCHANGE POLICY</div>
                <div>CONTACT</div>
                <div>SEARCH</div>
                <div>PRIVACY POLICY</div>
                <div>TERMS OF SERVICE</div>
            </div>
            <div className={styles.div1}>
                <div>NEWS LETTER</div>
                <div class={styles.line}></div>
                <div>Join to get special offers, free giveaways, and once-in-a-lifetime deals.</div>
                <div><input className={styles.footer_inp}placeholder='your-email@example.com' /></div>
            </div>
            </div>
            <div className={styles.belowfirst}>@KEPNITZ <span>  POWERED BY KILLER MERCH</span></div>
            <div className={styles.belowImg}>
                <img src="https://img.icons8.com/ios-glyphs/2x/twitter.png" alt="twitter" width='24' height='24'/>
                <img src="https://img.icons8.com/material-rounded/2x/facebook-new.png" alt="facebook" width='24' height='24'/>
                <img src="https://img.icons8.com/material-rounded/2x/instagram-new.png" alt="instagram" width='24' height='24' />
                <img src="https://img.icons8.com/material-rounded/2x/youtube-play.png" alt="youtube" width='24' height='24' />
            </div>
            
           
            
        </div>
    )
}

export default Footer