import React from 'react'
import { graphql } from "gatsby"
import { Layout } from '../../components/layout'
import { ProductListing } from "../../components/product-listing"

import {  hero_overlay, black_fri, black_img, flex } from './bestseller.module.css'
import BlackFriday from '../../assets/images/Black_friday_Collection_Logo.webp'
import HeroVideo from "../../videos/HPHero_BFCM_3x1_02.webm"
import ProductSideBar from '../../components/product-sidebar'

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "best-sellers" }) {
      products {
        ...ProductCard
      }
    }
  }
`

function Hero() {
  return (
    <>
      <div className={hero_overlay}>
        <video loop autoPlay muted>
          <source src={HeroVideo} type="video/webm" />
        </video>
        <div className={black_fri}>
          <div className={black_img}>
            <img src={BlackFriday} alt="blackfriday" />
          </div>
          <h5>BEST SELLERS</h5>
        </div>
      </div>
    </>
  )
}

function BestSeller({data}) {
    return (
        <Layout>
          <Hero />
          <div className={flex}>
            <ProductSideBar />
            <ProductListing products={data?.shopifyCollection?.products} />
          </div>
        </Layout>
    )
}

export default BestSeller
