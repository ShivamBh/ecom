import React, { useState, useEffect } from 'react'
import { QtyInput, QtyChange, QtyValue, QtyVariant } from './styles'

const QuantityInput = props => {
  const { onQtyChange, currentVariant } = props
  const [quantity, setQuantity] = useState(1)

  const subQty = e => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const addQty = e => {
    setQuantity(quantity + 1)
  }

  useEffect(() => {
    onQtyChange(quantity)
    console.log('current var', currentVariant)
  }, [quantity])

  return (
    <QtyInput>
      <div>
        <QtyVariant>{currentVariant.title}</QtyVariant>
      </div>
      <div>
        <QtyChange onClick={subQty}>-</QtyChange>
        <QtyValue>{quantity}</QtyValue>
        <QtyChange onClick={addQty}>+</QtyChange>
      </div>
    </QtyInput>
  )
}

export default QuantityInput
