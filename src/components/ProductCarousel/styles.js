import styled from '@emotion/styled'

export const WindowContainer = styled.div`
  margin-top: 0.83vw;
  width: 100%;
`

export const WindowItem = styled.div`
  display: inline-block;
  height: 6.35vw;
  width: 6.35vw;
  margin-bottom: 0.65vw;
  margin-right: 0.65vw;
  border: 1px solid black;

  > .gatsby-image-wrapper {
    width: 100%;
    height: 100%;

    > img {
      object-fit: cover;
    }
  }
`
