import React, { useState } from 'react'
import {
  OutOfStock,
  OutOfStockInput,
  OutOfStockMessage,
  OutofStockBtn,
} from './styles'

const NotifyInStock = props => {
  const [notifyEmail, setNotifyEmail] = useState('')

  // submit state vals = ready/error/success
  const [submitState, setSubmitState] = useState('ready')

  const handleSubmit = () => {
    if (!emailIsValid(notifyEmail)) {
      setSubmitState('error')
    }

    if (notifyEmail && emailIsValid(notifyEmail)) {
      console.log('Submit Notify Email', notifyEmail)
      setSubmitState('success')
    }
  }

  const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  return (
    <>
      <OutOfStock>
        <OutOfStockMessage>
          Get notified when this product is back in stock.
        </OutOfStockMessage>

        <OutOfStockInput onChange={ev => setNotifyEmail(ev.target.value)} />
        <OutofStockBtn onClick={handleSubmit}>Notify Me</OutofStockBtn>

        {submitState === 'error' ? (
          <div className="error">Please enter a valid email</div>
        ) : (
          ''
        )}
      </OutOfStock>
    </>
  )
}

export default NotifyInStock
