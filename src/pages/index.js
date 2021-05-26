import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import Layout from '~/layouts'
import { TransitionState } from 'gatsby-plugin-transition-link'
import {
  HomeWrapper,
  HomeIntro,
  IntroContent,
  IntroImage,
  BannerTitle,
  CtaBtn,
  Btn,
} from '~/components/PageComponents/HomePage/styles'

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
        <HomeIntro className="intro">
          <IntroContent>
            <BannerTitle>
              Garden Fresh, blended Assam tea, delivered at your doorstep
            </BannerTitle>
            <CtaBtn to="#">Explore</CtaBtn>
          </IntroContent>
          <IntroImage></IntroImage>
        </HomeIntro>
      </HomeWrapper>
    </>
  )
}

export default IndexPage
