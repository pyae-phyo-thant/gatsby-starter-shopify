import React from 'react'
import { Link } from "gatsby"

import {wraper,collecHeader,link } from './product-sidebar.module.css'

function ProductSideBar() {
    return (
        <>
            <div className={wraper}>
                <span className={collecHeader}>Collections</span> <br />
                <ul className={link}>
                    <li>
                        <Link key="all" to="/products">All Products</Link>
                    </li>
                    <li>
                        <Link key="bestseller" to="/collections/bestseller">Best Sellers</Link>
                    </li>
                    <li>
                        <Link key="new-release" to="/collections/new-releases">New Releases</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ProductSideBar
