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
`

export const HomeWrapper = styled.div``

export const HomeIntro = styled.section`
  display: flex;
  min-height: 25vw;
  justify-content: space-between;
  align-items: flex-start;
`

export const BannerTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.lg.banner};
  font-weight: 500;
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

// export const
