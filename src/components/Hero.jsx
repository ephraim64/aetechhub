import { Link } from "react-router-dom"
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div>
      <div className="lg:h-[90vh] max-[340px]:h-[90vh] max-sm:h-full md:h-[50vh] flex items-center w-[90%] m-auto bg-gradient-image max-md:py-10 bg-cover bg-center rounded-2xl relative mt-5">

        <div className="grid items-center text-center m-auto">
        <div className="hidden lg:flex text-white text-xl justify-center items-center bg-gradient-to-r from-pink to-purple hover:bg-gradient-to-l hover:from-pink hover:to-purple rounded-3xl hover:scale-110 duration-500 ease-linear w-[349px] m-auto">
                    <Link to="/contact" className='py-2 px-4 flex items-center gap-2'>
                    (4,5/5) Rating Star by Clients
                    <BsArrowUpRight />
                    </Link>
          </div>
          <h1 className="p-6 font-extrabold lg:text-[5rem] md:text-[2.5rem] text-[2rem] text-white mt-12">#1 Effortless Solutions, Engineered To Perfection</h1>
          <p className="text-white pb-6 text-[20px] lg:w-2/3 px-1 m-auto">Every corner of you business is covered meticulously by our team boned and insured professionals, Serving Business Since 2019</p>
          <div className="lg:flex text-white text-xl justify-center items-center bg-gradient-to-r from-purple to-purple border-gray-100 border shadow hover:bg-gradient-to-l hover:from-pink hover:to-purple rounded-3xl hover:scale-110 duration-500 ease-linear w-[319px] m-auto">
                    <Link to="/contact" className='py-2 px-4 flex items-center gap-2'>
                    Send Us a Message
                    <BsArrowUpRight />
                    </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero