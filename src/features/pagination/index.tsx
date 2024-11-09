'use client'

import { usePagination } from '@/functions/hooks/usePagination'
// import type { DataItem } from '@/functions/types';

export const Pagination = () => {
  const {
    data,
    error,
    isLoading,
    // currentPage,
    // setCurrentPage,
  } = usePagination({
    id: '1',
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load data</div>;
  if (!data) return null;

  return (
    <>
      <ul>
        {data.data.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Pagination