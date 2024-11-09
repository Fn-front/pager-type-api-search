import React from 'react';

type Props = {
  current: number
  setCurrent: React.Dispatch<React.SetStateAction<number>>
  totalPages: number
}

export const Prev = (props: Props) => {

  const { current, setCurrent } = props

  const handleClick = () => {
    if (current === 1) return null

    setCurrent(current - 1)
  }

  return (
    <button
      onClick={handleClick}
    >prev</button>
  )
}

export default Prev