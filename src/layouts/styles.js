import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
      html {
        font-family: 'Mukta', 'sans-serif';
        font-size: calc(112.5% + 0.25vw);
        font-weight: 300;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      ul.transition {
        display: flex;
        position: fixed;
        z-index: 1000000;
        height: 101vh;
        width: 100%;
        top: 0;
        left: 0;
        margin: 0;
        pointer-events: none;
        padding: 0;
      }

      ul.transition li {
        transform: scaleY(0);
        background: black;
        width: 20%;
        list-style-type: none;
      }
    `}
  />
)

export const Img = styled(Image)`
  max-width: 100 %;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: 'left . right';
`

export const GridLeft = styled.div`
  grid-area: left;
`

export const GridRight = styled.div`
  grid-area: right;
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`
