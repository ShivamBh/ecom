import styled from '@emotion/styled'
import Image from 'gatsby-image'

import { breakpoints } from '../../utils/styles'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 400px;
  gap: 2.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Product = styled.div`
  height: 100%;
`

export const ProductImg = styled(Image)`
  height: 300px;
  object-fit: cover;
  max-width: 100%;
  margin-bottom: 1.25rem;
`

export const Title = styled.span`
  display: block;
  font-weight: light;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
`

export const PriceTag = styled.span`
  font-weight: 300;
  font-size: 0.75rem;
  margin-top: 15px;
  font-weight: bolder;
`
