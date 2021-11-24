import React from 'react'
import { graphql } from "gatsby"

import bestSellerImg from '../assets/images/best-seller.webp'
import blackFriImg from '../assets/images/black-fri.webp'

import {container,bestCeller,blackFri,bestDesc,BlackDesc} from './discount.module.css'

export const bestSeller = graphql`
  query{
    shopifyCollection(handle: { eq: "best-sellers" }) {
        products {
          ...ProductCard
        }
      }
  }
`


function Discount({data}) {
    console.log('collection',data)
    return (
        <>
           <div className={container}>
               <a className={bestCeller} href="" alt="BestSeller">
                    <img src={bestSellerImg} alt="BestSeller" />
                    <div className={bestDesc}>
                        <h5>Best Sellers</h5>
                        <span>Shop Now</span>
                    </div>
               </a>
               <a className={blackFri} href="" alt="BlackFriday">
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
