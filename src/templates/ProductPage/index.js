import React from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import DetailPageCarousel from '../../components/ProductCarousel/DetailPageCarousel'
import {
  ProductTitle,
  ProductDescription,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from './styles'
// import Layout from '~/layouts'
// import { motion } from 'framer-motion'

const ProductPage = ({ data, transitionStatus, pageContext }) => {
  const product = data.shopifyProduct
  const { prismicData } = pageContext
  console.log('Prismic Data', prismicData)
  console.log('Shopify Data', product)
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <div>
        <TwoColumnGrid>
          <GridLeft>
            <DetailPageCarousel images={product.images}></DetailPageCarousel>
          </GridLeft>
          <GridRight>
            <ProductTitle uppercase cx>
              {product.title}
            </ProductTitle>
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <ProductForm product={product} />
          </GridRight>
        </TwoColumnGrid>
      </div>
      <h1>Product Page</h1>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
