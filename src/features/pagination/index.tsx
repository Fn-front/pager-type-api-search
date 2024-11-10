'use client'

import { CustomPagination } from '@/components/pagination';
import { usePagination } from '@/functions/hooks/usePagination'
import { sprinkles } from '@/styles/utils/sprinkles.css';
// import type { DataItem } from '@/functions/types';

export const Pagination = () => {
  const {
    data,
    error,
    isLoading,
    currentPage,
    setCurrentPage,
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
            <span>id.{item.id}：</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className={sprinkles({
        marginTop: {
          desktop: 'xxLarge',
          mobile: 'medium'
        }
      })}>
        <CustomPagination
          currentPage={currentPage}
          totalPages={data.totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  )
}

export default Pagination