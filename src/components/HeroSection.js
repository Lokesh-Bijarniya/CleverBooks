import React from 'react';
import '../App.css';

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white py-0 rounded-bl-2xl rounded-br-3xl">
      <nav className="container mx-auto flex justify-between items-center py-6 fixed mx-12 z-10">
        <div className="text-3xl ">CleverBooks</div>
        <div className="hidden md:flex space-x-6 ">
          <a href="#" className="hover:text-gray-400">Product</a>
          <a href="#" className="hover:text-gray-400">Pricing</a>
          <a href="#" className="hover:text-gray-400">Industry</a>
          <a href="#" className="hover:text-gray-400">Customer Stories</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Blog</a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-400 py-2">Login</a>
          <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full ">Talk to Us</a>
        </div>
      </nav>

      <div className="container mx-auto flex flex-col md:flex-row items-center py-36">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-semibold">Every order fulfilled, <span className="text-gradient">on time.</span></h1>
          <p className="mt-4 text-lg md:text-2xl font-extralight">Eliminate overstocking and under-stocking with CleverBooks. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.</p>
          <button className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full">Get started with CleverBooks</button>
        </div>
        <div className="md:w-1/2 mt-10 ml-20 md:mt-0">
          <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
