import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import Layout from '~/layouts'
import { TransitionState } from 'gatsby-plugin-transition-link'

const HomeWrapper = styled.div`
  margin-top: 7.5vw;
`

const IndexPage = ({ children, transitionStatus }) => {
  // console.log('transitionStatus', transitionStatus)
  return (
    <>
      {/* <TransitionState>
        {({ transitionStatus, entry, exit }) => {
          console.log('Status', transitionStatus)
        }}
      </TransitionState> */}
      <HomeWrapper>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <ProductGrid />
        <Link to="/page-2/">Go to page 2</Link>
      </HomeWrapper>
    </>
  )
}

export default IndexPage
