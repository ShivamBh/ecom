import styled from '@emotion/styled'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

export const CtaBtn = styled(Link)`
  padding: 1.1vw 4.95vw;
  background-color: black;
  color: white;
  text-decoration: none;
  border-radius: 2.56vw;
  font-size: 1.25vw;
`

export const Btn = styled.button`
  padding: 1.1vw 3.89vw;
  background-color: black;
  color: white;
  text-decoration: none;
  border-radius: 0.56vw;
  text-transform: none;
  font-weight: ${props => props.theme.fontWeights.normal};
  border-radius: 2.56vw;
`

export const HomeWrapper = styled.div``

export const HomeIntro = styled.section`
  display: flex;
  min-height: 25vw;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${props => props.theme.paddings.section.lg} 0;
`

export const BannerTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.lg.banner};
  font-weight: ${props => props.theme.fontWeights.normal};

  line-height: 1.4;
`

export const IntroContent = styled.div`
  width: 31.94vw;
`

export const IntroImage = styled.div`
  width: 47.5vw;
  height: 37.9vw;
  background-color: black;
`

export const HomeNewsletter = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 12.5vw;
  max-width: 56.94vw;
  margin: 0 auto;
  padding: 2.7vw 0;
`

export const NewsletterText = styled.p`
  font-size: ${props => props.theme.fontSizes.lg.info}
  font-weight: ${props => props.theme.fontWeights.normal};

`

export const NewsletterInput = styled.input`
  outline: none;
  border-radius: 2px;
  background-color: white;
  border: 1px solid black;
  padding: 1.07vw 0.73vw;
  width: 22.5vw;
`
