'use client'

import React, { useEffect, useState } from 'react'
import NextButton from './parts/next'
import PrevButton from './parts/prev'
import ListItem from './parts/list'

import { pagination_wrapper } from './style.css'

interface CustomPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: React.Dispatch<React.SetStateAction<number>>
}

export function CustomPagination({
  currentPage,
  totalPages,
  onPageChange
}: CustomPaginationProps) {

  const [current, setCurrent] = useState<number>(currentPage ?? 1)

  useEffect(() => {
    onPageChange(current)
  }, [current, onPageChange])

  return (
    <>
      <div className={pagination_wrapper}>
        <PrevButton
          current={current}
          setCurrent={setCurrent}
          totalPages={totalPages}
        />
        <ListItem
          current={current}
          setCurrent={setCurrent}
          totalPages={totalPages}
        />
        <NextButton
          current={current}
          setCurrent={setCurrent}
          totalPages={totalPages}
        />
      </div>
    </>
  )
}
