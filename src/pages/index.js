import React, { useState } from 'react'
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
  HomeNewsletter,
  NewsletterText,
  NewsletterInput,
} from '~/components/PageComponents/HomePage/styles'

const IndexPage = ({ children, transitionStatus }) => {
  // console.log('transitionStatus', transitionStatus)
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleNewsletterSubmit = () => {
    if (newsletterEmail) {
      console.log('submit', newsletterEmail)
    }
  }

  const handleInputChange = e => {
    console.log('input', e.target.value)
    setNewsletterEmail(e.target.value)
  }

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

        <HomeNewsletter>
          <NewsletterText>Subscribe to our newsletter</NewsletterText>
          <NewsletterInput placeholder="Email" onChange={handleInputChange} />
          <Btn type="submit" onClick={handleNewsletterSubmit}>
            Submit
          </Btn>
        </HomeNewsletter>
      </HomeWrapper>
    </>
  )
}

export default IndexPage
