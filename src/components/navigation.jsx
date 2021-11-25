import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import {
  navStyle,
  navLink,
  activeLink,
  dropdown,
  dropdownContent,
} from "./navigation.module.css"

// Get data from graphql API
export function Navigation({ className }) {
  const {
    allShopifyProduct: { productTypes },
  } = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        productTypes: distinct(field: productType)
      }
    }
  `)

  return (
    <nav className={[navStyle, className].join(" ")}>
      <div className={dropdown}>
        <Link 
        key='All'
        className={navLink}
        to='/products'
        activeClassName={activeLink}
        >
          Products
          <i className="fa fa-caret-down"></i>
        </Link>
        <div className={dropdownContent}>
        {productTypes.map((name) => (
        <Link
          key={name}
          className={navLink}
          to={`/products/${slugify(name)}`}
          activeClassName={activeLink}
        >
          {name}
        </Link>
      ))}
        </div>
      </div>
      <Link
        key="about"
        className={navLink}
        to="/about/"
        activeClassName={activeLink}
      >
        About Us
      </Link>
      <Link
        key="contact"
        className={navLink}
        to="/contact/"
        activeClassName={activeLink}
      >
        Contact Us
      </Link>
    </nav>
  )
}
