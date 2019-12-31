import { render, fireEvent } from '@testing-library/react'
import React from 'react'

const Comp = () => {
  return (
    <button role="button">Click</button>
  )
}

it('turns on', () => {
  const { getByRole } = render(<Comp />)
  fireEvent.click(getByRole('button'))
})
