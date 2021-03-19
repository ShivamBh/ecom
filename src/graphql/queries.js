import { graphql } from 'gatsby'

export const getAllPrismicProducts = graphql`
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
`
