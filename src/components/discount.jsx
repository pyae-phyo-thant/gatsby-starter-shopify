import React from 'react'

import bestSellerImg from '../assets/images/best-seller.webp'
import blackFriImg from '../assets/images/black-fri.webp'

import {container,bestCeller,blackFri,bestDesc,BlackDesc} from './discount.module.css'


function Discount({}) {

    return (
        <>
           <div className={container}>
               <a className={bestCeller} href="http://localhost:8000/collections/bestseller" alt="BestSeller">
                    <img src={bestSellerImg} alt="BestSeller" />
                    <div className={bestDesc}>
                        <h5>Best Sellers</h5>
                        <span>Shop Now</span>
                    </div>
               </a>
               <a className={blackFri} href="http://localhost:8000/collections/black-friday" alt="BlackFriday">
                    <img src={blackFriImg} alt="BlackFriday" />
                    <div className={BlackDesc}>
                        <h5>Black Friday Collection</h5>
                        <span>Shop Now</span>
                    </div>
               </a>
            </div> 
        </>
    )
}

export default Discount
