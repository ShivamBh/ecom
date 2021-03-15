import React, { useState } from 'react'
import {
  VariantOption,
  VariantName,
  VariantValueItem,
  VariantValues,
} from './styles'

const VariantSelector = ({ options, onOptionChange, checkDisabled }) => {
  const handleChange = (idx, value) => {
    console.log('variant', idx, value)
    onOptionChange(idx, value)
  }

  const getClasses = () => {}

  return (
    <>
      {options.map(({ id, name, values }, index) => (
        <VariantOption className="variantOption" key={id}>
          <VariantName className="variantName">{name}</VariantName>
          <VariantValues className="variantValues">
            {values.map(value => (
              <VariantValueItem
                key={`${name}-${value}`}
                onClick={() => handleChange(index, value)}
                // disabled={checkDisabled(name, value)}
                // className={checkDisabled(name, value) ? 'disabled' : ''}
              >
                {value}
              </VariantValueItem>
            ))}

            {/* <VariantValueItem className="active">M</VariantValueItem>
            <VariantValueItem>L</VariantValueItem> */}
          </VariantValues>
        </VariantOption>
      ))}
    </>
  )
}

export default VariantSelector
