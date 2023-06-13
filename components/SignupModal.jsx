import React, { useState } from 'react';
// import modalImage from '../assets/images/ExtractedBg.png';
import modalImageMobile from '../assets/images/ExtractedSm.png';
import modalImageLarge from '../assets/images/ExtractedBg.png';
import Image from 'next/image';
import Button from './Button';
import Footer from './Footer';

const SignupModal = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  // const {className, children, bgImage} = props;
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-400">
        <div className="absolute z-10 w-[90%] rounded-3xl md:rounded-[2rem] h-[60vh] md:h-[80vh] md:w-[60%] border shadow-xl ">
            <Image
                src={modalImageMobile}
                className='md:hidden object-cover rounded-3xl md:rounded-[2rem] h-full w-full object-center'
                quality={100}
            />
            <Image
                src={modalImageLarge}
                className='hidden md:block object-cover rounded-3xl md:rounded-[2rem] h-full w-full object-center'
                quality={100}
            />
        </div>
        <div className='z-20 md:w-[30%] mt-12 md:mt-0'>
          <div className='flex justify-center'> 
        <h2 className='text-xl font-bold text-[#8054DE] text-center mx-2'>Hi, Welcome Back </h2>
          <span>
            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.4173 14.1671C27.4173 16.1217 24.4146 17.708 22.46 17.708C20.5054 17.708 18.5649 16.1217 18.5649 14.1671H16.4404C16.4404 16.1217 14.4999 17.708 12.5453 17.708C10.5907 17.708 7.588 16.1217 7.588 14.1671H6.52572C6.29909 15.0736 6.17162 16.0225 6.17162 16.9998C6.17162 20.005 7.36542 22.8871 9.4904 25.0121C11.6154 27.1371 14.4975 28.3309 17.5026 28.3309C20.5078 28.3309 23.3899 27.1371 25.5149 25.0121C27.6399 22.8871 28.8337 20.005 28.8337 16.9998C28.8337 16.0225 28.7062 15.0736 28.4796 14.1671H27.4173ZM17.5026 5.66881C13.3102 5.66881 9.64174 7.94918 7.68714 11.3343H27.3181C25.3635 7.94918 21.6951 5.66881 17.5026 5.66881ZM31.6664 16.9998C31.6664 20.7563 30.1742 24.3589 27.5179 27.0151C24.8617 29.6714 21.2591 31.1636 17.5026 31.1636C15.6426 31.1636 13.8008 30.7973 12.0824 30.0855C10.364 29.3737 8.80257 28.3304 7.48734 27.0151C4.83112 24.3589 3.33887 20.7563 3.33887 16.9998C3.33887 13.2434 4.83112 9.64076 7.48734 6.98453C10.1436 4.32831 13.7462 2.83606 17.5026 2.83606C19.3626 2.83606 21.2044 3.20242 22.9229 3.91421C24.6413 4.62601 26.2027 5.6693 27.5179 6.98453C28.8332 8.29976 29.8765 9.86116 30.5883 11.5796C31.3001 13.298 31.6664 15.1398 31.6664 16.9998ZM17.5026 24.4075C15.024 24.4075 12.8428 23.3735 11.568 21.8438L13.5793 19.8326C14.2166 20.8524 15.7322 21.5747 17.5026 21.5747C19.2731 21.5747 20.7886 20.8524 21.426 19.8326L23.4373 21.8438C22.1625 23.3735 19.9813 24.4075 17.5026 24.4075Z" fill="#501BC0"/>
            </svg>
          </span>
          </div>
          {/* Some overlay things go in here */}
          <form action="" className="space-y-2 mb-12 md:w-full">
      <div className="space-y-2">
        <div className="">
          <label htmlFor="email" className="block text-md font-bold text-white">Email address</label>
          <input type="email" name="email" id="email" placeholder="cryptoboost@gmail.com" className="w-full p-2 rounded-3xl focus:outline-none pl-4 outline-[#8054DE]" />
        </div>

        <div className="pb-3">
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="leading-1 text-md font-bold text-white">Password</label>
            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-white">Forgot password?</a>
          </div>
          <div className="relative">
            <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="*****" className="w-full p-2 mb-3 rounded-3xl focus:outline-none pl-4 outline-pink-500" />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <button
                className="outline-none focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M17.71 9.29a1 1 0 010 1.42l-1.42 1.42a1 1 0 01-1.42 0L13 11.41l-1.42 1.42a1 1 0 01-1.42 0L9 12.41l-1.42 1.42a1 1 0 01-1.42 0L4.29 12.7a1 1 0 010-1.42L6 10.59l1.42-1.42a1 1 0 011.42 0L10 8.59l1.42-1.42a1 1 0 011.42 0l2.42 2.42zM10 4a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 4a6 6 0 100 12 6 6 0 000-12zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm6-2a1 1 0 012 0v4a1 1 0 11-2 0V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Button type='submit' className='w-full px-8 py-2 font-semibold rounded-3xl text-white bg-gradient-to-r from-[#84399F] to-[#7B57E1]'>Proceed</Button>
      </div>
    </form>
          {/* <form action="" className="space-y-2 mb-12 md:w-full">
          <div className="space-y-2">
            <div className="">
              <label for="email" className="block text-md font-bold text-white">Email address</label>
              <input type="email" name="email" id="email" placeholder="cryptoboost@gmail.com" className="w-full p-2 rounded-3xl focus:outline-none pl-4 outline-[#8054DE]" />
            </div>

            <div className=" pb-3 ">
              <div className="flex justify-between items-center">
                <label for="password" className="leading-1 text-md font-bold text-white">Password</label>
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-white">Forgot password?</a>
              </div>
              <input type="password" name="password" id="password" placeholder="*****" className="w-full p-2 mb-3 rounded-3xl focus:outline-none pl-4 outline-pink-500" />
            </div>

            <Button type='submit' className='w-full px-8 py-2 font-semibold rounded-3xl text-white bg-gradient-to-r from-[#84399F] to-[#7B57E1]'>Proceed</Button>
            
          </div>
        </form> */}
        </div>
      </div>
      <Footer />
      
      {/* <div className={className} bgImage>{children}</div> */}
    </>
  )
}

export default SignupModal