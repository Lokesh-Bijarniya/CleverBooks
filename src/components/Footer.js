import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">CleverBooks</h2>
            <p className="text-gray-400 mr-16">
              CleverBooks is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.
            </p>
          </div>
          <div className="w-full md:w-1/6 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Product</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Customer Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Career</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/6 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Learn</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact CleverBooks</h3>
            <p className="text-gray-400">
              <a href="mailto:sales@getCleverBooks.ai" className="text-gray-400 hover:text-white">sales@getCleverBooks.ai</a>
            </p>
            <p className="text-gray-400 mt-2">
              Registered Office:<br />
              1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102
            </p>
            <p className="text-gray-400 mt-2">
              Corporate Office:<br />
              291, All Time Space, 4th Floor, 15th A Cross, Sector - 6, HSR Layout, Bengaluru, India. 560102
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon/></a>
              <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon/></a>
              <a href="#" className="text-gray-400 hover:text-white"><InstagramIcon/></a>
              <a href="#" className="text-gray-400 hover:text-white"><LinkedInIcon/></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright 2024 CleverBooks</p>
          <p>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a> | <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          </p>
          <p>Conifer Innovations Private Limited CIN: U72900KA2022PTC163144</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
