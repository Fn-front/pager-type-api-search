'use client';

import { useState } from 'react';
import useSWR from 'swr';
// import axiosInstance from '@/lib/axios/axiosInstance';
import type { PaginatedResponse } from '@/functions/types';
import axios from 'axios';

type UsePaginationOptions = {
  id: string;
  initialPage?: number;
};

export const usePagination = ({
  id,
  initialPage = 1,
}: UsePaginationOptions) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const fetcher = async (url: string) => {
    const response = await axios.post<PaginatedResponse>(url, {
      id,
      page: currentPage,
    });
    return response.data;
  };

  const { data, error, isLoading } = useSWR('/api/data', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
    currentPage,
    setCurrentPage,
  };
};
