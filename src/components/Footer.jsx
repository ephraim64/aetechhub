import logo from '../assets/logo1.svg';
import {
  FaLinkedinIn,
  FaInstagram ,
} from 'react-icons/fa';
import { CiYoutube } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { MdOutlineEmail, MdOutlinePhoneInTalk, MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className='grid px-[3rem] md:px-[3rem] lg:px-[6rem] py-[3rem] gap-10 mx-auto bg-[#0e0017] text-white m-auto'>
      <div className='smflex lg:grid lg:grid-cols-4 justify-between items-start border-b border-gray-50 pb-6'>
        <div className='mb-12'>
          <img src={logo} alt='logo' className='w-42' />
          <h2 className='grid font-semibold text-[1rem]'>You Dream <span>We Build</span></h2>
        </div>

        {/* quick links */}
        <div className='grid gap-4 mb-12'>
          <div>
            <h2 className='font-semibold text-[1.5rem]'>Quick Links</h2>
          </div>
            <div className=''>
              <div className='py-1'>
                <Link to='/'>
                  <p className='hover:text-purple duration-300 ease-linear'>Home</p>
                </Link>
              </div>
              <div className='py-1'>
              <Link to='/about'>
                <p className='hover:text-purple duration-300 ease-linear'>
                  About Us
                </p>
              </Link>
              </div>
              <div className='py-1'>
              <Link to='/service'>
                <p className='hover:text-purple duration-300 ease-linear'>
                  Services
                </p>
              </Link>
              </div>
              <div className='py-1'>
              <Link to='/work'>
                <p className='hover:text-purple duration-300 ease-linear'>
                  Our Work
                </p>
              </Link>
              </div>

              <div className='py-1'>
              <Link to='/pricing'>
                <p className='hover:text-purple duration-300 ease-linear'>
                  Pricing
                </p>
              </Link>
              </div>
            <div className='gap-3'>

                          <Link to='/contact'>
                            <p className='hover:text-purple duration-300 ease-linear'>
                              Contact Us
                            </p>
                          </Link>
            </div>
            </div>
        </div>

        {/* socials */}
        <div className='grid gap-4 mb-12'>
          <h2 className='font-semibold text-[1.5rem]'>Follow Us</h2>
        <div className='flex items-center gap-4 text-3xl max-md:pt-6'>
            <Link to='https://www.linkedin.com/company/aetech-digital-hub/' target='_blank'>
            <div className='rounded-full p-2 bg-purple'>
            <FaLinkedinIn className='cursor-pointer ease-in-out duration-300'/>
            </div>
            </Link>
            {/* <Link to='#' target='_blank'>
              <FaTwitter className='hover:text-purple duration-300 ease-linear cursor-pointer' />
            </Link> */}
          <Link to='#' target='_blank'>
          <div className='rounded-full p-2 bg-purple'>
            <CiYoutube className='cursor-pointer ease-in-out duration-300'/>
            </div>
          </Link>
          <Link to='https://www.instagram.com/aetech_hub/' target='_blank'>
          <div className='rounded-full p-2 bg-purple'>
            <FaInstagram className='cursor-pointer ease-in-out duration-300'/>
            </div>
          </Link>
          </div>
        </div>
        {/* contact us */}
        <div className='grid gap-6'>
        <h2 className='font-semibold text-[1.5rem]'>Contact Us</h2>
        <div className='flex items-center gap-4'> 
          <MdOutlineEmail size={43}/>
          <p className='text-[1rem]'>Email: aetech.hub@aetechorg.com</p>
        </div>

        <div className='flex items-center gap-4'> 
          <MdOutlinePhoneInTalk size={43}/>
          <p className='text-[1rem]'>Phone: +233-55-233-2924</p>
        </div>

        <div className='flex items-center gap-4'> 
          <MdOutlineLocationOn size={43}/>
          <p className='text-[1rem]'>Our Location: Accra-Ghana</p>
        </div>

        </div>
      </div>
      <div className='text-center'>&copy; 2024 aeTech Digital Hub. All rights reserved.</div>

    </div>
  );
};

export default Footer;
