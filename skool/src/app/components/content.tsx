"use client"
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Card from './profileCards'; // Import your Card component

interface ContentProps {
  totalItems: number; // Total number of items you want to paginate
}

const Content: React.FC<ContentProps> = ({ totalItems }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  // Calculate the range of items to display based on the current page
  const startIndex = (page - 1) * 10; // Assuming 10 items per page
  const endIndex = Math.min(startIndex + 10, totalItems);

  // Simulated data for this example
  const sampleData = Array.from({ length: totalItems }).map((_, index) => ({
    id: index + 1,
    // ... your other data properties
  }));

  return (
    <>
      {/* Render your Card components based on the paginated range */}
      {sampleData.slice(startIndex, endIndex).map((data) => (
        <Card key={data.id} {...data} />
      ))}

      {/* Pagination component */}
      <Pagination
        page={page}
        count={Math.ceil(totalItems / 10)} // Assuming 10 items per page, adjust as needed
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/home${item.page === 1 ? '' : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
    </>
  );
};

export default Content;
