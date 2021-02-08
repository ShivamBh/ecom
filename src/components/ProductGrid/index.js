import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import TransitionLink from 'gatsby-plugin-transition-link'

import StoreContext from '~/context/StoreContext'
import { Grid, Product, ProductImg, Title, PriceTag } from './styles'
import { Img } from '~/utils/styles'
import TLink from '../TransitionLink/index'
import { animateObjects, newContent } from '../../utils/transitions'

const ProductGrid = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <Grid>
      {allShopifyProduct.edges ? (
        allShopifyProduct.edges.map(
          ({
            node: {
              id,
              handle,
              title,
              images: [firstImage],
              variants: [firstVariant],
            },
          }) => (
            <Product key={id}>
              <TLink
                exit={{
                  length: 0.6,
                  trigger: ({ exit, e, node }) => animateObjects(exit, node),
                }}
                entry={{
                  delay: 0.5,
                  length: 0.6,
                  trigger: ({ entry, node }) => newContent(node),
                }}
                to={`/product/${handle}/`}
              >
                {firstImage && firstImage.localFile && (
                  <ProductImg
                    fluid={firstImage.localFile.childImageSharp.fluid}
                    alt={handle}
                  />
                )}
              </TLink>
              {/* <Link
                entry={entryTransition}
                exit={exitTransition}
                to={`/product/${handle}/`}
              >
                {firstImage && firstImage.localFile && (
                  <ProductImg
                    fluid={firstImage.localFile.childImageSharp.fluid}
                    alt={handle}
                  />
                )}
              </Link> */}
              <Title>{title}</Title>
              <PriceTag>{getPrice(firstVariant.price)}</PriceTag>
            </Product>
          )
        )
      ) : (
        <p>No Products found!</p>
      )}
    </Grid>
  )
}

export default ProductGrid
