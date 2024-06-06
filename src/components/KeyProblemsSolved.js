import React from 'react';

const KeyProblemsSolved = () => {
  return (
    <section className="py-28 bg-gray-100">
      <div className="container mx-auto ">
        <h2 className="text-4xl font-extrabold mb-10 text-center">Four key questions answered by CleverBooks</h2>
        <div className="flex flex-wrap justify-center gap-10 my-20">
          <div className="w-full md:w-1/3 p-6 bg-purple-200 rounded-3xl">
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg" alt="Problem Icon" className="h-12  mb-4" />
            <h1 className="text-3xl font-semibold my-4">What to order</h1>
            <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
          </div>
          <div className="w-full md:w-1/3 p-6 bg-purple-200 rounded-3xl">
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg" alt="Problem Icon" className="h-12  mb-4" />
            <h1 className="text-3xl font-semibold my-4">When to order</h1>
            <p>Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
          </div>
          <div className="w-full md:w-1/3 p-6 bg-purple-200 rounded-3xl">
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg" alt="Problem Icon" className="h-12 mb-4" />
            <h1 className="text-3xl font-semibold my-4">How much to stock</h1>
            <p>Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>
          </div>
          <div className="w-full md:w-1/3 p-6 bg-purple-200 rounded-3xl">
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg" alt="Problem Icon" className="h-12 mb-4" />
            <h1 className="text-3xl font-semibold my-4">Where to place</h1>
            <p>Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyProblemsSolved;
