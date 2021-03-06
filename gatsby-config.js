const path = require('path')
const linkResolver = require('./src/utils/linkResolver')

require('dotenv').config({
  // path: `.env.${process.env.NODE_ENV}`,
  path: `.env.development`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Shopify Starter`,
    description: `Kick off your next, ecommerce experience with this Gatsby starter. This starter ships with credentials to a shopify demo store so you can try it out immediately.`,
    author: `@alexanderhorl`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `rhecom`,
        accessToken: `MC5ZRk0zVVJBQUFDTUFwdmQ3.77-9PEfvv70FZe-_vTHvv71277-977-9N--_ve-_vWcRKO-_ve-_ve-_vR0F77-977-977-9J--_vR3vv71x77-9`,
        linkResolver: () => doc => linkResolver(doc),
        schemas: {
          products: require('./src/prismicSchema/products.json'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/layouts/index.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop. This is required.
        // Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
        // 'gatsby-source-shopify-test-shop.myshopify.com'.
        shopName: 'hemispherestore',

        // An API access token to your Shopify shop. This is required.
        // You can generate an access token in the "Manage private apps" section
        // of your shop's Apps settings. In the Storefront API section, be sure
        // to select "Allow this app to access your storefront data using the
        // Storefront API".
        // See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
        accessToken: '58aa5a63df125b2803937455fc93d707',

        // Set verbose to true to display a verbose output on `npm run develop`
        // or `npm run build`. This prints which nodes are being fetched and how
        // much time was required to fetch and process the data.
        // Defaults to true.
        verbose: true,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'vvwct7ii',
        dataset: 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-134421805-1',
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Mukta'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
