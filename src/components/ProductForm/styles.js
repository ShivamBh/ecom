import styled from '@emotion/styled'

export const AddToCartBtn = styled.button`
  display: inline-block;
  font-size: ${props => props.theme.fontSizes.lg.button};
  height: 
  padding: ${props => props.theme.paddings.button.lg};
  height: ${props => props.theme.heights.button.lg};
  width: ${props => props.theme.widths.button.lg};
  color: ${props => props.theme.colors.btnText}
  background-color: ${props => props.theme.colors.btnBg}
  font-weight: ${props => props.theme.fontWeights.button};
  margin-bottom: 1.39vw;
  
  &.disabled {
    background-color: ${props => props.theme.colors.lightgray}
  }
`
export const QtyInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;

  height: ${props => props.theme.heights.button.lg};
  width: ${props => props.theme.widths.button.lg};
  margin-bottom: ${props => props.theme.margins.actions.lg};
  margin-top: ${props => props.theme.margins.actions.lg};

  > div {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div:first-child {
    border-right: 1px solid black;
    flex: 1 0 60%;
  }

  > div:last-child {
    border-left: 1px solid black;
  }
`

export const QtyVariant = styled.p`
  display: inline-block;
  font-size: ${props => props.theme.fontSizes.lg.body};
  font-weight: bold;
  text-transform: uppercase;
`

export const QtyChange = styled.button`
  display: inline-block;
  background: none;
  color: black;
  font-size: ${props => props.theme.fontSizes.lg.button};
  cursor: pointer;
`

export const QtyValue = styled.p`
  display: inline-block;
  font-size: font-size: ${props => props.theme.fontSizes.lg.body};
  font-weight: ${props => props.theme.fontWeights.button};
  color: black;
  margin: 0 0.89vw;
`
export const QtyInputField = styled.input`
  border: 2px solid black;
  font-size: ${props => props.theme.fontSizes.lg.body}
  padding: ${props => props.theme.paddings.button.lg};
  height: ${props => props.theme.heights.button.lg};
  width: ${props => props.theme.widths.button.lg};
  
`
export const VariantOption = styled.div`
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.theme.heights.button.lg};

  margin-top: ${props => props.theme.margins.actions.lg};
`
export const VariantName = styled.p`
  display: block;
  font-size: ${props => props.theme.fontSizes.lg.body};
  font-weight: bold;
  text-transform: uppercase;
  width: 50%;
  display: flex;
  justify-content: center;
`

export const VariantValues = styled.div`
  border-left: 2px solid black;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 50%;
  padding: 0 ${props => props.theme.paddings.button.lg};
`

export const VariantValueItem = styled.button`
  display: block;
  font-size: ${props => props.theme.fontSizes.lg.meta};
  margin: 0 4px;
  padding: ${props => props.theme.paddings.hoverAction.lg};
  position: relative;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  background: white;
  color: black;
  transition: all 0.2s ease-out;

  &:hover {
    background: ${props => props.theme.colors.blue};
    color: white;
  }

  &.active {
    background: ${props => props.theme.colors.blue};
    color: white;
  }

  &.disabled {
    background: white;
    color: ${props => props.theme.colors.lightgray};
  }
`
