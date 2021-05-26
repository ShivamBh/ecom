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
  SectionWrapper,
  IntroContent,
  IntroImage,
  BannerTitle,
  CtaBtn,
  Btn,
  HomeNewsletter,
  NewsletterText,
  NewsletterInput,
  PitchContent,
  PitchText,
  PitchMedia,
} from '~/components/PageComponents/HomePage/styles'

const NewsletterBlock = () => {
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
      <HomeNewsletter>
        <NewsletterText>Subscribe to our newsletter</NewsletterText>
        <NewsletterInput placeholder="Email" onChange={handleInputChange} />
        <Btn type="submit" onClick={handleNewsletterSubmit}>
          Submit
        </Btn>
      </HomeNewsletter>
    </>
  )
}

const IndexPage = () => {
  return (
    <>
      <HomeWrapper>
        {/* Intro Section */}
        <SectionWrapper>
          <HomeIntro className="intro">
            <IntroContent>
              <BannerTitle>
                Garden Fresh, blended Assam tea, delivered at your doorstep
              </BannerTitle>
              <CtaBtn to="#">Explore</CtaBtn>
            </IntroContent>
            <IntroImage></IntroImage>
          </HomeIntro>
        </SectionWrapper>

        {/* Newsletter Section */}
        <SectionWrapper>
          <NewsletterBlock />
        </SectionWrapper>

        {/* Pitch Content Block Section */}
        <SectionWrapper>
          <PitchContent>
            <div>
              <PitchText>
                Fresh from our gardens, nurtured by the air.
              </PitchText>
              <PitchText>
                Filled with the aroma of the soil of Sonarie.
              </PitchText>
              <PitchText>
                Processed, sealed and delivered straight to your kitchen.
              </PitchText>
            </div>
            <PitchMedia></PitchMedia>
          </PitchContent>
        </SectionWrapper>
      </HomeWrapper>
    </>
  )
}

export default IndexPage
