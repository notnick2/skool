"use client"
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Card from './profileCards';
import Pagination from './pagination';

interface DataItem {
  id: number;
  banner: string;
  ranking: string;
  profilePicture: string;
  profileName: string;
  description: {
    data: string;
    type: string;
    members: string;
    price: string;
  };
}

const PAGE_SIZE = 10;
const TOTAL_ITEMS = 30; // Assuming you have 30 items in total

const SampleData: DataItem[] = [
  // ... your sample data
  {
    id: 1,
    banner: ' https://placedog.net/300/200?random',
    ranking: '#1',
    profilePicture: ' https://placedog.net/50/50?random',
    profileName: 'John Doe',
    description: {
      data: 'best community of die hard fans we are fans die hard fans',
      type: 'Private',
      members: '50k Members',
      price: 'Free',
    },
  },
];

const Page: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(TOTAL_ITEMS / PAGE_SIZE);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentItems = SampleData.slice(startIndex, endIndex);

  return (
    <div>
      <Grid container spacing={2}>
        {currentItems.map((item) => (
          <Grid key={item.id} item xs={12} sm={4}>
            <Card {...item} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Page;
