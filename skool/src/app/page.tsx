"use client"

import Search from "./components/search";
import ButtonComponent from "./components/button";
import Card from "./components/profileCards";
import React, { useState } from 'react';



type SampleDataItem = {
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
};

// Example usage with your provided data
const SampleData: SampleDataItem[] = [
  {
    id: 1,
    banner: 'https://placedog.net/300/200?random',
    ranking: '#1',
    profilePicture: 'https://placedog.net/50/50?random',
    profileName: 'John Doe',
    description: {
      data: 'best community of die-hard fans we are fans die-hard fans',
      type: 'Private',
      members: '50k Members',
      price: 'Free',
    },
  },
];


const Home: React.FC = () => {
  const cardsPerPage = 30; // 3 columns * 10 rows
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(SampleData.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = SampleData.slice(indexOfFirstCard, indexOfLastCard);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  

  return (
    <>
    <div className="bg-[#f8f7f5] justify-center align-middle">
    <div className="bg-white min-h-[64px]">
      <h1>logo</h1>
    </div>
    <div className="col-span-3"></div>
    <div className="justify-center align-center min-w-[1px]  row-span-12">
      <h1 className="text-center text-custom-black font-bold text-[45px] pt-10">Discover communities</h1>
      <h2 className="font-medium text-[20px] text-custom-black text-center leading-tight">or <span className="text-custom-blue font-medium text-[20px] leading-tight">create your own </span></h2>
      <div className="flex items-center mt-6">
      <Search/>
      </div>
      <div className="flex items-center justify-center mt-8">
        <ButtonComponent/>
      </div>
      <div className="grid grid-cols-3 mr-[423px] ml-[423px] gap-4 mt-[80px] pb-[80px]">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index}>
          {SampleData.map((data) => (
            <Card key={data.id} {...data} />
          ))}
        </div>
      ))} 
    </div>
  
    </div>
    </div>
   
  
    </>
  );
}

export default Home;