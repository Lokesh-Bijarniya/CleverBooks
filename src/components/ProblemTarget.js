import React from 'react';


function ProblemTarget() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Things your spreadsheet wishes it could do</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-purple-600">Accurate Demand Forecasting</h2>
              <p className="text-gray-700">
                Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts don't: trends, real-time market signals, promotional activities, and even logistics disruptions.
              </p>
              <a href="#." className="text-purple-500 underline">Learn more</a>
            </div>

            <ul className="space-y-2">
              <li className="font-semibold">HELIX: Workflow Automation</li>
              <li className="font-semibold">Automated Purchase Planning</li>
              <li className="font-semibold">Automated Distribution Planning</li>
              <li className="font-semibold">Easy Integration</li>
              <li className="font-semibold">Custom Dashboards</li>
              <li className="font-semibold">Consensus Planning</li>
            </ul>

            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded relative top-16">View all features</button>
          </div>

            <div className='bg-gradient-to-r from-purple-300 to-pink-300 rounded-2xl p-12'>
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-1600.webp" alt="Forecast Plan" className="rounded-xl shadow-lg" />

          </div>
        </div>
      </div>
     </div>
  );
}

export default ProblemTarget;
