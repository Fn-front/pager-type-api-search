import React from 'react';

type Props = {
  current: number
  setCurrent: React.Dispatch<React.SetStateAction<number>>
}

export const Prev = (props: Props) => {

  const { current, setCurrent } = props

  return (
    <button>prev</button>
  )
}

export default Prev