const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const prismicProducts = await graphql(`
    query MyQuery {
      allPrismicProducts {
        edges {
          node {
            id
            uid
            type
            data {
              shopify_product
              title {
                raw
              }
              product_subtitle {
                raw
              }
              similar_products {
                product {
                  document {
                    ... on PrismicProducts {
                      id
                      uid
                      data {
                        shopify_product
                        title {
                          raw
                        }
                      }
                    }
                  }
                }
              }
              body {
                ... on PrismicProductsBodyProductDetails {
                  id
                  items {
                    content {
                      raw
                    }
                    description_title {
                      raw
                    }
                  }
                  slice_label
                  slice_type
                }
                ... on PrismicProductsBodyProductContent {
                  id
                  slice_label
                  slice_type
                  primary {
                    content_heading {
                      raw
                    }
                  }
                  items {
                    section_content {
                      raw
                    }
                    section_image {
                      alt
                      url
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 1200) {
                            base64
                            tracedSVG
                            srcWebp
                            srcSetWebp
                            originalImg
                            originalName
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        totalCount
      }
    }
  `)

  const shopifyProducts = graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
    }
  `)

  // shopifyProducts.data.allShopifyProduct.edges.forEach(({ node }) => {
  //   createPage({
  //     path: `/product/${node.handle}/`,
  //     component: path.resolve(`./src/templates/ProductPage/index.js`),
  //     context: {
  //       // Data passed to context is available
  //       // in page queries as GraphQL variables.
  //       handle: node.handle,
  //     },
  //   })
  // }

  prismicProducts.data.allPrismicProducts.edges.forEach(({ node }) => {
    createPage({
      path: `/product/${node.uid}`,
      component: path.resolve(`./src/templates/ProductPage/index.js`),
      context: {
        handle: node.uid,
        id: node.id,
        type: node.type,
        prismicData: node.data,
      },
    })
  })

  // return graphql(`
  //   {
  //     allShopifyProduct {
  //       edges {
  //         node {
  //           handle
  //         }
  //       }
  //     }
  //   }
  // `).then(result => {
  //   )
  // })
}
