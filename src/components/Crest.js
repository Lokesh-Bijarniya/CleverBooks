import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const posts = [
  {
    image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a2c8d8b6a42e610f78e10d_expert%201-p-800.png',
    title: 'Deep domain expertise',
    description: 'Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B.',
  },
  {
    image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d486cea3f09_Focus%20on%20KPIs%20that%20matter.svg', // Replace with actual URL
    title: 'A focus on KPIs that matter',
    description: 'Our tools help you make decisions to grow your businesses. Everything works towards improving cash flow and product availability.',
  },
  {
    image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5150ea3f0a_Ease%20of%20use.svg', // Replace with actual URL
    title: 'Ease of use, for everyone',
    description: 'Withan intuitive and emphatic design, CleverBooks requires only minimal training (or begineer-level knowledge of supply chain) to use.',
  },
];

export default function Crest() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleForward = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const handleBackward = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
  };

  return (
    <div className='h-screen bg-gray-100'>
      <h1 className='text-5xl text-center font-bold py-12'>Get Crest and get...</h1>
      <div className='flex  justify-between items-center h-3/4 w-3/4 m-auto bg-white rounded-3xl p-4'>
        <ArrowBackIosIcon className='cursor-pointer' onClick={handleBackward} />
        <div className='flex flex-wrap items-center'>
          <img src={posts[currentIndex].image} className='h-96' alt={posts[currentIndex].title} />
          <div className='mx-24'>
            <h1 className='text-3xl my-8'>{posts[currentIndex].title}</h1>
            <p>{posts[currentIndex].description}</p>
          </div>
        </div>
        <ArrowForwardIosIcon className='cursor-pointer' onClick={handleForward} />
      </div>
    </div>
  );
}
