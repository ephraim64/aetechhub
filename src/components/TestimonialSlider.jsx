// src/components/TestimonialSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { testimonials } from '../constants';



const TestimonialSlider = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="flex flex-col items-center gap-6 px-4 lg:px-24">
        <div className='flex flex-col gap-2 text-center'>
            <h1 className="text-3xl lg:text-4xl font-medium text-purple">Testimonials</h1>
            <p>These are what our clients say about us.</p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={2}
          className="w-full"
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Specify the custom pagination container
            bulletActiveClass: "swiper-pagination-bullet-active bg-purple",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} >
                <div className="flex flex-row-reverse justify-center rounded-lg shadow-lg">
                <img src={testimonial.image} alt="" className='w-44 h-60 lg:w-60' />
                <div className="bg-white p-4 max-w-lg flex flex-col gap-3">
                    <div>
                        <h2 className="mt-4 lg:text-xl font-semibold text-purple">{testimonial.name}</h2>
                        <p className="text-xs lg:text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                    <p className="lg:selection:text-lg font-medium text-gray-700">"{testimonial.message}"</p>
                </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Pagination Container */}
      <div className="custom-pagination flex justify-center mt-4"></div>
    </div>
  );
};

export default TestimonialSlider;
