import * as React from "react"
import { graphql,Link } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import {
  container,
  callOut,
  callToAction,
  deployButton,
  hero_overlay,
  black_fri,
  black_img,
  showNow,
  mContainer,
  newReleased,
  newReleasedDesc,
  newReleasedContainer
} from "./index.module.css"

import HeroVideo from "../videos/HPHero_BFCM_3x1_02.mp4"
import BlackFriday from "../assets/Black_friday_blurr_logo.webp"
import newReleasedImg from '../assets/images/new-release.webp'
import Discount from "../components/discount"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "best-sellers" }) {
      products {
        ...ProductCard
      }
    }
  }
`
function Hero(props) {

  return (
    <>
      <div>
        <div className={hero_overlay}>
          <video loop autoPlay muted>
            <source src={HeroVideo} type="video/mp4" />
          </video>
          <div className={black_fri}>
            <div className={black_img}>
              <img src={BlackFriday} alt="blackfriday" />
            </div>
            <h3>30% OFF SITE-WIDE</h3>
            <h5>OUR BIGGEST SALE OF THE YEAR</h5>
            <p className={showNow}>
              <Link key="products" to="/products">Shop Now</Link>
            </p>
          </div>
        </div>
      </div>
      <div className={container}>
        {!!process.env.GATSBY_DEMO_STORE && (
          <>
            <p className={callOut}>
              It's a proof-of-concept in a box, with 10k products and 30k
              variants to help you get to proof-of-concept as soon as right now.
            </p>
            <p className={callToAction}>
              Hook it up to your own Shopify store data and start customizing in
              minutes by deploying it to Gatsby Cloud for free. Grab your
              Shopify store credentials and
              <a href="https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-shopify&utm_campaign=shopify-starter">
                <img
                  src="https://www.gatsbyjs.com/deploynow.png"
                  alt="Deploy to Gatsby Cloud"
                  className={deployButton}
                />
              </a>
            </p>
          </>
        )}
      </div>
    </>
  )
}

function Mission() {

  return (
    <>
        <div className={mContainer}>
          <span>OUR MISSION</span>
          <h1>
          To outfit the world’s most <br /> ambitious people.
          </h1>

        </div>
    </>
  )
}

function NewRelease() {
  return (
    <div className={newReleasedContainer}>
      <Link key="new-release" to="/collections/new-releases" >
        <div className={newReleased}>
          <img src={newReleasedImg} alt="BestSeller" />
          <div className={newReleasedDesc}>
              <h5>New Releases</h5>
              <span>Shop Now</span>
          </div>
          </div>
      </Link> 
    </div>
  )
}

export default function IndexPage({ data }) {

  return (
    <Layout>
      <Hero />
      <Mission />
      <Discount />
      <ProductListing products={data?.shopifyCollection?.products} />
      <NewRelease />
    </Layout>
  )
}
