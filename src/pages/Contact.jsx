import React from 'react'
import Map from '../assets/map.png'
import ScrollToTop from '../components/ScrollToTop';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMarkEmailRead } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="py-4 lg:py-16">
        <div className='flex flex-col max-md:text-center lg:px-24 px-4 gap-4'>
            <h1 className='text-3xl lg:text-4xl text-medium'>Contact Us</h1>
            <p className="max-md:text-center lg:w-[50%]">We're here to help! Whether you have a question, need support, or want to discuss how we can bring your ideas to life, feel free to reach out.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-6 lg:py-16 px-4 lg:px-24 w-full'>
            <div className="flex flex-col gap-8">
                <h1 className="font-semibold text-purple text-xl lg:text-3xl">Get in Touch</h1>
                <form action="" className="flex flex-col gap-5">
                    <label htmlFor="" className="flex flex-col gap-2">Name
                        <input type="text" className="border border-gradient-to-b from-pink to-purple p-2 rounded-lg" />
                    </label>
                    <label htmlFor="" className="flex flex-col gap-2">Email
                        <input type="text" className="border border-gradient-to-b from-pink to-purple p-2 rounded-lg" />
                    </label>
                    <label htmlFor="" className="flex flex-col gap-2">Message
                        <textarea rows={8} type="text" className="border border-gradient-to-b from-pink to-purple p-2 rounded-lg" />
                    </label>
                    <div className="flex text-white lg:text-xl justify-center items-center bg-gradient-to-r from-pink to-purple hover:bg-gradient-to-l hover:from-pink hover:to-purple rounded-3xl hover:scale-105 duration-500 ease-linear transition-all w-fit">
                        <Link
                        to=""
                        className="py-2 px-2 lg:px-4 flex items-center gap-2"
                        >
                        Send Message
                        <BsArrowUpRight />
                        </Link>
                    </div>
                    <div className='flex items-center justify-between gap-2'>
                        <div className="flex items-center gap-4">
                            <FiPhoneCall className='text-3xl'/>
                            <div>
                                <p className='lg:text-lg font-semibold'>PHONE</p>
                                <p className='max-md:text-sm'>+233 050 123 4567</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <MdOutlineMarkEmailRead className='text-3xl'/>
                            <div>
                                <p className='lg:text-lg font-semibold'>E-MAIL</p>
                                <p className='text-red-600 max-md:text-sm'>info@aeTech.com</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className="font-semibold text-purple text-xl">Our Location</h1>
                <iframe className='rounded-md max-md:w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6260413691666!2d-0.1759250258576224!3d5.622100294358928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b13b0062aad%3A0x75de9717e31b2442!2sAccra%20Mall!5e0!3m2!1sen!2sgh!4v1737045530042!5m2!1sen!2sgh" width="560" height="580" style={{border:0}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <ScrollToTop />
    </div>
  )
}

export default Contact