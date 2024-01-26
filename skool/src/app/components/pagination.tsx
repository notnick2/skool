"use client"

// Pagination.tsx
import React from 'react';
import { Pagination as MuiPagination, PaginationProps as MuiPaginationProps } from '@mui/material';

interface PaginationProps extends MuiPaginationProps {
    totalPages: number,
    currentPage: number,
    onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;

}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      onChange={onPageChange}
    />
  );
};

export default Pagination;
