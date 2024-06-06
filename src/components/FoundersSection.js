// src/FoundersSection.js
import React from 'react';
// import foundersImage from './path-to-your-image/Screenshot 2024-06-04 at 10.26.29 PM.png'; // Ensure the correct path

const FoundersSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-white">
      <div className="md:w-1/2 p-16">
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64df240c8d5e1c29b06d3a95_Founders%20Photo.webp" alt="Founders" className="rounded-3xl shadow-lg" />
      </div>
      <div className="md:w-1/2 p-12">
        <h2 className="text-5xl font-bold mb-8 ">From the founders</h2>
        <p className="mb-8 text-gray-700">
          We are a young company solving an age-old problem: Supply Chain. Our goal is simple: to eradicate stock outs for businesses that want to grow faster. Our background, tech expertise, and empathy allow us to do just that.
        </p>
        <p className="mb-8 text-gray-700">
          Thank you for checking out CleverBooks, and we hope to help you always be in stock!
        </p>
        <button className="px-4 py-2 bg-purple-600  text-white rounded-full hover:bg-purple-700">Learn more</button>
        <div className="mt-4 text-gray-600 bg-purple-200 rounded-3xl p-3 w-96">
          <p><b>Rahul Vishwakarma, Akhil Kumar & Yogesh Byahatti</b> - Founders</p>
        </div>
      </div>
    </div>
  );
};

export default FoundersSection;
