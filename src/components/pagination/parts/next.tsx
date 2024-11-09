import React from 'react';

type Props = {
  current: number
  setCurrent: React.Dispatch<React.SetStateAction<number>>
}

export const Next = (props: Props) => {

  const { current, setCurrent } = props

  return (
    <button>next</button>
  )
}

export default Next