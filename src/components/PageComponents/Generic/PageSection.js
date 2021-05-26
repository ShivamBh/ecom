import React from 'react'
import styled from '@emotion/styled'

const SectionBlock = styled.section`
  width: 100%;
  min-height: 9.55vw;
`

const PageSection = ({ children }) => {
  return (
    <>
      <section>{children}</section>
    </>
  )
}

export default PageSection
