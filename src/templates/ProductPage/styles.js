import styled from '@emotion/styled'

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
  padding: 8.33vw;
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-start;
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;
`

export const ProductTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.lg.title};
  margin-bottom: 0.7vw;
  word-wrap: break-word;
  font-family: 'Helvetica', 'Helvetica', sans-serif;
  font-weight: 800;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
  margin: 0 0 0.5rem;
  line-height: ${props => props.theme.lineHeights.lg.title};
`

export const ProductDescription = styled.div`
  font-size: ${props => props.theme.fontSizes.lg.body};
  line-height: ${props => props.theme.lineHeights.lg.body};
  margin-top: 2.7vw;
  font-family: 'Helvetica', 'Helvetica', sans-serif;
  font-weight: 300;
`
