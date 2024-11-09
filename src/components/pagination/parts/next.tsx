import React from 'react';

type Props = {
  current: number
  setCurrent: React.Dispatch<React.SetStateAction<number>>
  totalPages: number
}

export const Next = (props: Props) => {

  const { current, setCurrent, totalPages } = props

  const handleClick = () => {
    if (totalPages <= current) return null

    setCurrent(current + 1)
  }

  return (
    <button
      onClick={handleClick}
    >next</button>
  )
}

export default Next