import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { motion, AnimatePresence } from 'framer-motion'

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

const duration = 0.5

const variants = {
  inital: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: duration,
    },
  },
}

const AnimationBox = styled(motion.div)`
  height: 0;
  width: 100vw;
  position: fixed;
  z-index: 100000;
  background: black;
  display: hidden;
  bottom: 0;
  left: 0;
  right: 0;
`

const AnimBoxVariants = {
  initial: {
    height: 0,
  },
  enter: {
    height: ['100vh', '0vh'],
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    height: 0,
    transition: {
      duration: duration,
    },
  },
}

const Layout = ({ children, location }) => {
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
              <AnimatePresence>
                <AnimationBox
                  key={location.pathname}
                  variants={AnimBoxVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                ></AnimationBox>
              </AnimatePresence>
              <Navigation siteTitle={data.site.siteMetadata.title} />

              <Wrapper>{children}</Wrapper>
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
