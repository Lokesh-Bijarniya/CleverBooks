import React from 'react';
import { Link, Element } from 'react-scroll';

const KeyMetrics = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <nav className="relative top-80 left-4 ">
        <ul className="space-y-4">
          <li>
            <Link 
              to="stockouts" 
              smooth={true} 
              duration={500} 
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-8 h-8 flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <span className="text-white">📦</span>
              </div>
              <span className="py-1 px-3 rounded-full border border-gradient-to-r from-purple-500 to-pink-500 text-sm">STOCKOUTS</span>
            </Link>
          </li>
          <li>
            <Link 
              to="cashRecovery" 
              smooth={true} 
              duration={500} 
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-8 h-8 flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <span className="text-white">💸</span>
              </div>
              <span className="py-1 px-3 rounded-full border border-gradient-to-r from-purple-500 to-pink-500 text-sm">CASH RECOVERY CYCLE</span>
            </Link>
          </li>
          <li>
            <Link 
              to="revenue" 
              smooth={true} 
              duration={500} 
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-8 h-8 flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <span className="text-white">💰</span>
              </div>
              <span className="py-1 px-3 rounded-full border border-gradient-to-r from-purple-500 to-pink-500 text-sm">REVENUE</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="ml-16">
        <Element name="stockouts" className="min-h-screen flex flex-col justify-center items-center">
          <div className="text-center">
            <h2 className="text-8xl font-bold text-gradient bg-gradient-to-r from-purple-500 to-pink-500">85%</h2>
            <p className="mt-4 text-2xl">Reduction in out-of-stock</p>
          </div>
        </Element>

        <Element name="cashRecovery" className="min-h-screen flex flex-col justify-center items-center">
          <div className="text-center">
            <h2 className="text-8xl font-bold text-gradient bg-gradient-to-r from-purple-500 to-pink-500">70%</h2>
            <p className="mt-4 text-2xl">Improvement in cash recovery cycle</p>
          </div>
        </Element>

        <Element name="revenue" className="min-h-screen flex flex-col justify-center items-center">
          <div className="text-center">
            <h2 className="text-8xl font-bold text-gradient bg-gradient-to-r from-purple-500 to-pink-500">30%</h2>
            <p className="mt-4 text-2xl">Increase in revenue</p>
          </div>
        </Element>
      </div>
    </div>
  );
}



export default KeyMetrics;
