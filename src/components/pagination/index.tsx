'use client'

import { useState } from 'react'
import NextButton from './parts/next'
import PrevButton from './parts/prev'
import ListItem from './parts/list'

interface CustomPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function CustomPagination({
  currentPage,
  totalPages,
  // onPageChange
}: CustomPaginationProps) {

  const [current, setCurrent] = useState<number>(currentPage ?? 1)

  return (
    <>
      <div className='pagination'>
        <PrevButton
          current={current}
          setCurrent={setCurrent}
          totalPages={totalPages}
        />
        <ListItem />
        <NextButton
          current={current}
          setCurrent={setCurrent}
          totalPages={totalPages}
        />
      </div>
      <p>現在のページ：{current}</p>
    </>
  )
}
