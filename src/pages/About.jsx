import { useState } from 'react'
// import Mission from '../assets/MarketingImage.jpg'
import Vision from '../assets/vision.png'
import { team } from '../constants';
import TeamMember from '../components/TeamMember';
import ScrollToTop from '../components/ScrollToTop';
import TestimonialSlider from '../components/TestimonialSlider';

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showAll, setShowAll] = useState(false); // State to manage showing all team members

  const handleOpenModal = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="pt-4 lg:pt-16 w-[90%] m-auto">
      <div className='grid lg:grid-cols-2 gap-6 relative top-12'>
        <div>
          <div className='flex flex-col items-start gap-4 py-6'>
               <h1 className='text-4xl text-medium'>About Us</h1>
               <p className="text-start py-6">Collaboration and creativity are the art of everything we do. We believe that technology can solve real world challenges. We specialise in software development, cutting edge technology integration and tailored solutions for business of all sizes.</p>
           </div>
           <div className='grid grid-cols-1 my-10 items-center gap-8 lg:gap-16 py-6 lg:py-16 px-4 w-full bg-purple bg-opacity-20'>
               <div className='flex flex-col gap-4'>
                   <h1 className='text-3xl lg:text-4xl font-semibold'>Our Vision</h1>
                   <p>Our vision is to create a world of understanding technology, build businesses with modern and advanced tech, and improve the efficiency of work done.</p>
               </div>
           </div>
      </div >
          <div className='py-6' >
            <img src={Vision} alt="" className='lg:w-[500px] lg:h-[550px] object-cover rounded-md lg:rounded-tl-[6rem] lg:rounded-br-[8rem] m-auto object-center'/>
          </div>
      </div>



         <div className='grid grid-cols-1 my-10 items-center gap-8 lg:gap-16 py-6 lg:py-16 px-4 lg:px-24 w-full bg-gradient-image text-white text-center rounded-md'>
             {/* <img src={Mission} alt="" className='w-[500px] h-[330px]'/> */}
             <div className='flex flex-col gap-4 py-10'>
                 <h1 className='text-3xl lg:text-4xl font-semibold'>Our Mission</h1>
                 <p className='lg:w-[70%] m-auto'>Our aim is to revolutionize business technology, foster innovation, collaboration and growth and to be the forefront of technological advancements, providing cutting edge solutions and services to clients.</p>
             </div>
         </div>

         {/* our team */}
      <div className="bg-slate-100 px-4 lg:px-10 py-16">
        <div className="flex flex-col items-center gap-3 py-5 text-black">
          <h1 className="text-3xl lg:text-4xl">Meet Our Team</h1>
          <p className="lg:px-72 max-md:text-sm text-center">
            Our team of skilled professionals is dedicated to understanding the unique needs and delivering results that exceed expectations from crafting intuitive applications to building robust systems. We are here for you.
          </p>
        </div>

        {/* CEO Section */}
        <div className="flex w-full justify-center mb-4">
          <div
            className="flex flex-col items-center gap-3 bg-white rounded-2xl py-4 px-[12px] lg:px-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105 duration-300 ease-linear"
            onClick={() => handleOpenModal(team[0])}
          >
            <img src={team[0].image} alt="" className="w-[350px] h-[400px] rounded-2xl object-cover" />
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold text-center">{team[0].name}</h1>
              <p className="text-lg font-medium text-center text-purple">{team[0].role}</p>
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(showAll ? team.slice(1) : team.slice(1, 5)).map((item, id) => {
            return (
              <div
                key={id}
                className="flex flex-col items-center gap-3 bg-white rounded-2xl py-4 px-2 cursor-pointer hover:shadow-lg transition-all hover:scale-105 duration-300 ease-linear"
                onClick={() => handleOpenModal(item)}
              >
                <img src={item.image} alt="" className="rounded-2xl w-[350px] h-[400px] object-cover" />
                <div className="flex flex-col gap-1">
                  <h1 className="text-xl font-semibold text-center">{item.name}</h1>
                  <p className="text-sm font-medium text-center text-purple">{item.role}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        {team.length > 4 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleToggleShowAll}
              className="bg-white text-purple px-6 py-2 rounded-lg font-medium shadow-md hover:bg-purple hover:text-white transition-all duration-300"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
      {/* Testimonial Slider Section */}
      <TestimonialSlider />

      {selectedMember && <TeamMember member={selectedMember} onClose={handleCloseModal} />}
      <ScrollToTop />
    </div>
  );
};

export default About;
