import React from 'react'
import { Link } from 'gatsby'

import ProductGrid from '~/components/ProductGrid'

import SEO from '~/components/seo'

const ProductsList = () => (
  <>
    <SEO title="Page two" />
    <h1
      style={{
        paddingTop: '10vw',
      }}
    >
      Products List Page
    </h1>

    <ProductGrid />
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default ProductsList
