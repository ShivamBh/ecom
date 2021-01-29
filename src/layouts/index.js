import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from './styles'
import Navigation from '~/components/Navigation'
import Footer from '../components/Footer'
import theme from './theme'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContextProvider>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <>
              <Navigation siteTitle={data.site.siteMetadata.title} />
              <Wrapper>{children}</Wrapper>
              <Footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="#">Some tech</a>
              </Footer>
            </>
          )}
        />
      </ContextProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
