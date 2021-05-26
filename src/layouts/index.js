import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

import ContextProvider from '~/provider/ContextProvider'
import { GlobalStyle } from './styles'
import Navigation from '~/components/Navigation'
import Footer from '../components/Footer'
import theme from './theme'
import { TransitionState } from 'gatsby-plugin-transition-link'

const Wrapper = styled.main`
  margin: 0 auto;
  margin-bottom: 0;
  max-width: 100%;
  min-height: 8.9vw;
  padding: 0px 7.5vw;
  padding-top: 3.3vw;
`

const duration = 0.8

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
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 100000;
  background: black;
  bottom: 0;
  left: 0;
  transform-origin: '50% 100%';
`

const AnimBoxVariants = {
  initial: {
    y: '100vh',
  },
  enter: {
    y: '-100vh',

    transition: {
      when: 'beforeChildren',
    },
  },
  exit: {
    y: '-100vh',
    // transition: {
    //   delay: 0.3,
    //   duration: duration,
    // },
  },
}

const Layout = ({ children, location }) => {
  let pageAnim = useAnimation()

  const triggerPageAnimation = async () => {
    await pageAnim.start({ scaleY: 1 })
    // await pageAnim.start({ transformOrigin: '50% 0%' })
    await pageAnim.start({ scaleY: 0 })
  }
  // console.log('Transition', TransitionState)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContextProvider>
        {/* <StaticQuery
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


              <div className="main-layout">{children}</div>
            </>
          )}
        /> */}
        <Navigation />

        <Wrapper className="main-layout">{children}</Wrapper>
      </ContextProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
