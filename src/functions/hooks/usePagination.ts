'use client';

import { useState } from 'react';
import useSWR from 'swr';
import axiosInstance from '@/lib/axios/axiosInstance';
import type { PaginatedResponse } from '@/functions/types';

type UsePaginationOptions = {
  endpoint: string;
  initialPage?: number;
};

export const usePagination = ({
  endpoint,
  initialPage = 1,
}: UsePaginationOptions) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const fetcher = (url: string) =>
    axiosInstance.get<PaginatedResponse>(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR(
    `${endpoint}?page=${currentPage}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  return {
    data,
    error,
    isLoading,
    currentPage,
    setCurrentPage,
  };
};
