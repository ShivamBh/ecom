import React from 'react'
import { FooterContainer, FooterContent } from './styles'

const Footer = ({ children }) => {
  return (
    <>
      <FooterContainer>
        <FooterContent>{children}</FooterContent>
      </FooterContainer>
    </>
  )
}

export default Footer
