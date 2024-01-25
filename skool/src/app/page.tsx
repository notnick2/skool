"use client"

import Search from "./components/search";
import ButtonComponent from "./components/button";
import Card from "./components/profileCards";

const SampleData = [
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
export default function Home() {


  return (
    <>
    <div className="bg-[#f8f7f5] justify-center align-middle">
    <div className="bg-white min-h-[64px]">
      <h1>logo</h1>
    </div>
    <div className="col-span-3"></div>
    <div className="justify-center align-center min-w-[1px] bg-slate-300 row-span-12">
      <h1 className="text-center text-custom-black font-bold text-[45px] pt-10">Discover communities</h1>
      <h2 className="font-medium text-[20px] text-custom-black text-center leading-tight">or <span className="text-custom-blue font-medium text-[20px] leading-tight">create your own </span></h2>
      <div className="flex items-center mt-6">
      <Search/>
      </div>
      <div className="flex items-center justify-center mt-8">
        <ButtonComponent/>
      </div>
      <div className="grid grid-cols-3 mr-[423px] ml-[423px] gap-4 mt-[80px]">
      {Array.from({ length: 100 }).map((_, index) => (
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