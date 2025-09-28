import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CardCta = () => {
  return (
    <div>
        <div className='h-full flex flex-col items-center w-[90%] m-auto border rounded-2xl py-10 px-4 my-[4rem] shadow lg:px-24 bg-gradient-to-b from-[#ffffff] via-[#ba97d10d] to-[#882dfe4e]  justify-between'>
                <div className='flex flex-col items-center w-full m-auto h-[201px] gap-[15px]'>
                  <h2 className='font-Montserrat font-normal text-3xl lg:text-[44px] leading-[52px] w-full text-center flex-wrap mb-[15px] max-md:text-center'>
                    Ready to start your next project?
                  </h2>
                  <p className='text-center py-2'>Don&apos;t see a package that fits your exact needs? We offer custom solutions. Send Us a message today, let’s get started on your next project.</p>
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
                {/* <div>
                  <img
                    src={ServiceImage}
                    alt='ReadyToWork'
                    className='w-80 lg:w-[580px] lg:h-[450.1px] max-md:mt-16'
                  ></img>
                </div> */}
              </div>
    </div>
  )
}

export default CardCta