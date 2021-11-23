import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import {
  navStyle,
  navLink,
  activeLink,
  dropdown,
  dropbtn,
  dropdownContent,
} from "./navigation.module.css"

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
      <Link
        key="All"
        className={navLink}
        to="/products/"
        activeClassName={activeLink}
      >
        All products
      </Link>
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
      <div className={dropdown}>
        <button className={dropbtn}>
          Dropdown
          <i className="fa fa-caret-down"></i>
        </button>
        <div className={dropdownContent}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
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
