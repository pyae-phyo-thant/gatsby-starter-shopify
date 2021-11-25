import React from 'react'
import { Link } from "gatsby"
import bestSellerImg from '../assets/images/best-seller.webp'
import blackFriImg from '../assets/images/black-fri.webp'

import {container,bestCeller,blackFri,bestDesc,BlackDesc} from './discount.module.css'


function Discount() {

    return (
        <>
           <div className={container}>
               <Link key="BestSeller" to="/collections/bestseller">
                   <div className={bestCeller}>
                        <img src={bestSellerImg} alt="BestSeller" />
                        <div className={bestDesc}>
                            <h5>Best Sellers</h5>
                            <span>Shop Now</span>
                        </div>
                    </div>
               </Link>
               <Link key="black-friday" to="/collections/black-friday">
                   <div className={blackFri}>
                        <img src={blackFriImg} alt="BlackFriday" />
                        <div className={BlackDesc}>
                            <h5>Black Friday Collection</h5>
                            <span>Shop Now</span>
                        </div>
                    </div>
               </Link>
            </div> 
        </>
    )
}

export default Discount
