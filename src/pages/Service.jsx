import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../constants';
// import { LuGraduationCap } from 'react-icons/lu';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsArrowUpRight } from 'react-icons/bs';
import ServiceImage from '../assets/ServiceImg.jpg';
import WebDevImage from '../assets/WebDevImage.jpg';
import ScrollToTop from '../components/ScrollToTop';

const Service = () => {
  const [expandedItems, setExpandedItems] = React.useState({});

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the state for the specific card
    }));
  };

  return (
    <div className='w-full'>
      {/* <div className='lg:h-[90vh] h-full md:h-[80vh] flex flex-col lg:flex-row items-center w-full bg-radial-gradient py-10 justify-between px-4 lg:px-24'>
        <div className='flex flex-col items-start lg:w-[554px] h-[201px] t-[381px] l-[132px] gap-6'>
          <h2 className='font-Montserrat font-normal text-3xl lg:text-[56px] leading-[52px] w-[444px] lg:flex-wrap max-md:text-center'>
            Our Services
          </h2>
          <p className='lg:w-[528px] flex-wrap'>
            We offer and solve problems across various fields of tech. Find
            below some of our services and advanced tech to improve the
            efficiency of work done.
          </p>
        </div>
        <div >
          <img
            src={ServiceImage}
            alt='ServiceImage'
            className='w-80 lg:w-[580px] lg:h-[450.1px]'
            />
        </div>
      </div> */}
      <div className='lg:h-[90vh] h-full md:h-[80vh] flex flex-col lg:flex-row items-center w-full py-10 px-4 lg:px-24 bg-[#BA97D10D] justify-between'>
        <div className='flex flex-col items-start lg:w-[554px] h-[201px] gap-[15px]'>
          <h2 className='font-Montserrat font-normal text-3xl lg:text-[44px] leading-[52px] w-[444px] flex-wrap mb-[15px] max-md:text-center'>
            Ready to start your next project?
          </h2>
          <p className='max-md:text-center'>Send Us a message today, let’s get started on your next project.</p>
          <div className='flex text-white lg:text-xl justify-center items-center bg-gradient-to-r from-pink to-purple hover:bg-gradient-to-l hover:from-pink hover:to-purple rounded-3xl hover:scale-105 duration-500 ease-linear transition-all max-md:w-full'>
              <Link
                to='/contact'
                className='py-2 px-2 lg:px-4 flex items-center gap-2'
              >
                Contact Us
                <BsArrowUpRight />
              </Link>
          </div>
        </div>
        <div>
          <img
            src={ServiceImage}
            alt='ReadyToWork'
            className='w-80 lg:w-[580px] lg:h-[450.1px] max-md:mt-16'
          ></img>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center lg:w-full h-[201px] gap-6'>
          <h2 className='font-Montserrat font-normal text-3xl lg:text-[56px] leading-[52px] lg:flex-wrap max-md:text-center'>
            Our Services
          </h2>
          <p className='lg:w-[600px] max-md:text-center lg:flex-wrap'>
            We offer and solve problems across various fields of tech. Find
            below some of our services and advanced tech to improve the
            efficiency of work done.
          </p>
        </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-20 px-4 py-8 lg:py-20">
        {services.map((item, id) => (
          <div
            key={id}
            className="px-4 py-6 border-[1px] border-[#232323] transition-all duration-300 ease-linear delay-200 hover:bg-[#ff42b002] hover:bg-opacity-5 hover:shadow-md hover:border-transparent hover:duration-500 rounded-[10px] flex flex-col gap-4 cursor-pointer"
          >
            <div className="p-2 text-4xl rounded-xl bg-pink text-white w-fit">
              <item.icon />
            </div>
            <h1 className="text-xl font-medium">{item.title}</h1>
            <ol className="list-none space-y-2">
              {item.skills
                .slice(0, expandedItems[id] ? undefined : 2) // Check state for the correct card
                .map((skill, skillId) => (
                  <li key={skillId} className="text-sm flex items-start gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
            </ol>
            {item.skills.length > 2 && (
              <button
                onClick={() => toggleExpand(id)} // Pass the current card's ID
                className="text-purple text-sm flex items-center gap-1 hover:text-pink transition-colors duration-300"
              >
                {expandedItems[id] ? (
                  <>
                    Hide <IoIosArrowUp className="text-lg" />
                  </>
                ) : (
                  <>
                    Read More <IoIosArrowDown className="text-lg" />
                  </>
                )}
              </button>
            )}
          </div>
        ))}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Service;
