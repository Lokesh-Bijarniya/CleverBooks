import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md  mx-auto">
        <div className='flex flex-wrap gap-3'>
            <img src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb4280dc875e2081fcc1_PLIX.svg' className='h-16'></img>
            <img src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6526695834fd99c7f319053a_MANOHAR.svg' className='h-16'></img>
            <img src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c88f37016d6cd94f5_mosaic.svg' className='h-16'></img>
            <img src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c00347cedbc54fcdb_the%20white%20willow.svg' className='h-16'></img>
            <img src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c2b88fe75cb4e9e62_BLUE%20TRIBE.svg' className='h-16'></img>
            <img src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958030e4b24786a6907_tahiliya.svg' className='h-16'></img>
            <img src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652673d679d1942e616b3675_everloom.svg' className='h-16'></img>
        </div>
      <div className="flex flex-col md:flex-row items-center mt-24">
        <div className="md:w-3/5">
          <p className="text-gray-700 text-lg mb-4">
            D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.
          </p>
          <div className="flex items-center">
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp"
              alt="Diksha Pande"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-900 font-semibold">Diksha Pande</p>
              <p className="text-gray-600">Co-founder, Samosa Party</p>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 mt-6 md:mt-0 md:ml-6 flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp"
            alt="Samosa Party"
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <div className="text-center bg-purple-200 rounded-lg p-4">
          <p className="text-purple-600 text-3xl font-bold ">upto 95%</p>
          <p className="text-gray-500">Demand Fulfilment</p>
        </div>
        <div className="text-center bg-purple-200 rounded-lg p-4">
          <p className="text-purple-600 text-3xl font-bold">&lt; 3%</p>
          <p className="text-gray-500">Daily Stock-out</p>
        </div>
        <button className="text-purple-600 hover:text-purple-800 font-semibold bg-purple-200 rounded-lg p-4">
          Read story →
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
