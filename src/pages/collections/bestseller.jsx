import React from 'react'
import { graphql } from "gatsby"
import { Layout } from '../../components/layout'

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "best-sellers" }) {
      products {
        ...ProductCard
      }
    }
  }
`

function BestSeller({data}) {
    return (
        <Layout>
         Best seller   
        </Layout>
    )
}

export default BestSeller
