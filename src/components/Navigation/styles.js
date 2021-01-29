import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  margin-bottom: 1.45rem;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1.45rem;
  margin: 0 auto;
  max-width: 960px;
`

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  color: black;
`

export const CartCounter = styled.span`
  background-color: black;
  color: white;
  border-radius: 1rem;
  padding: 0 10px;
  font-size: 0.875rem;
  float: right;
  margin: -10px;
  z-index: 20;
`
