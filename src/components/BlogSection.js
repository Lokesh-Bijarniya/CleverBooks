import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const BlogSection = () => {
  const blogs = [
    {
      title: "Impact of RPA (Robotic Process Automation) in Supply Chain",
      date: "Oct 12, 2023",
      imgSrc: "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/6527d12579fe9fb6cfc0c8eb_RPA%20BLOG%20THUMBNAIL.png",
      link: "#",
    },
    {
      title: "Creating an Impact with Inventory Planning: The QSR Edition",
      date: "Aug 28, 2023",
      imgSrc: "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/64ec7b71e9332bfe4b920ba3_thumbnail%20QSR%20(1).png",
      link: "#",
    },
    {
      title: "The Ultimate Recipe for Inventory Success",
      date: "Aug 4, 2023",
      imgSrc: "https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/64ccbab82ea1c2946724d96f_blog-thumbnail.jpg",
      link: "#",
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Delivered: <br />The Crest blog</h2>
            <p className="text-gray-600">
              Insights from years of working in various supply-chain roles (and an itch to write). We hope you find these posts interesting!
            </p>
          </div>
          <div className="mt-8 lg:mt-0 text-center">
            <button className="bg-gradient-to-r from-purple-400 to-pink-600 text-white py-2 px-6 rounded-full hover:from-purple-500 hover:to-pink-700">
              View all blogs
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img src={blog.imgSrc} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.date}</p>
                <a href={blog.link} className="text-purple-500 hover:text-purple-700">
                  <ArrowOutwardIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          <button className="text-purple-500 hover:text-purple-700"><ArrowBackIosIcon/></button>
          <button className="text-purple-500 hover:text-purple-700"><ArrowForwardIosIcon/></button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
