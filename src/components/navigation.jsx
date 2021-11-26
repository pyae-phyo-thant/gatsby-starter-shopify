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
import './mobile-menu.css'

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
    <>
 
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

      {/* Mobile Nav */}
      <header className="header">

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          <li>
            <div className={dropdown}>
              <Link 
              key='All'
              className={navLink}
              to='/products'
              activeClassName={activeLink}
              >
                Products
                <i className="fa fa-caret-down" style={{paddingLeft: '10px'}}></i>
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
            {/* <div className="dropdown show">
              <a className=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div> */}
          </li>
          <li>
            <Link
              key="about"
              className={navLink}
              to="/about/"
              activeClassName={activeLink}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              key="contact"
              className={navLink}
              to="/contact/"
              activeClassName={activeLink}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </header>
    </>
  )
}
