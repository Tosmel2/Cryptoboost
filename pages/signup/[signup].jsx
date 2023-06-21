import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SuccessPage from '@/components/SuccessPage';
import modalImageMobile from '../../assets/images/ExtractedSm.png';
import modalImageLarge from '../../assets/images/ExtractedBg.png';
import Image from 'next/image';
import Button from '@/components/Button';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const router = useRouter();
  const { signup } = router.query;
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Check if it's the final step
    if (signup === '4') {
      // Show the success page
      setShowSuccess(true);

      // Redirect to the signin page after 3 seconds
      const redirectTimer = setTimeout(() => {
        router.push('/signin');
      }, 3000);

      // Clear the timer when the component is unmounted
      return () => clearTimeout(redirectTimer);
    }
  }, [signup]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextStep = Number(signup) + 1;

    // Redirect to the next step
    router.push(`/signup/${nextStep}`);
  };

  const renderStep = () => {
    if (showSuccess) {
      return (
        <>
          <SuccessPage />
        </>
      );
    }

    switch (signup) {
      case '1':
        return (
          <>
            <div className="h-screen flex justify-center items-center bg-[#150741] bg-opacity-75">
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
                <div className='z-20 md:w-[30%] mt-8 md:mt-0 w-[85%]'>
                  <div className='flex justify-center'> 
                    <h2 className='md:text-xl font-bold text-[#8054DE] text-center mb-2 md:mx-2'>
                    How Would You Like To Sign Up? 
                    </h2>
                    <span>
                    <svg width="25" height="24" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.4173 14.1671C27.4173 16.1217 24.4146 17.708 22.46 17.708C20.5054 17.708 18.5649 16.1217 18.5649 14.1671H16.4404C16.4404 16.1217 14.4999 17.708 12.5453 17.708C10.5907 17.708 7.588 16.1217 7.588 14.1671H6.52572C6.29909 15.0736 6.17162 16.0225 6.17162 16.9998C6.17162 20.005 7.36542 22.8871 9.4904 25.0121C11.6154 27.1371 14.4975 28.3309 17.5026 28.3309C20.5078 28.3309 23.3899 27.1371 25.5149 25.0121C27.6399 22.8871 28.8337 20.005 28.8337 16.9998C28.8337 16.0225 28.7062 15.0736 28.4796 14.1671H27.4173ZM17.5026 5.66881C13.3102 5.66881 9.64174 7.94918 7.68714 11.3343H27.3181C25.3635 7.94918 21.6951 5.66881 17.5026 5.66881ZM31.6664 16.9998C31.6664 20.7563 30.1742 24.3589 27.5179 27.0151C24.8617 29.6714 21.2591 31.1636 17.5026 31.1636C15.6426 31.1636 13.8008 30.7973 12.0824 30.0855C10.364 29.3737 8.80257 28.3304 7.48734 27.0151C4.83112 24.3589 3.33887 20.7563 3.33887 16.9998C3.33887 13.2434 4.83112 9.64076 7.48734 6.98453C10.1436 4.32831 13.7462 2.83606 17.5026 2.83606C19.3626 2.83606 21.2044 3.20242 22.9229 3.91421C24.6413 4.62601 26.2027 5.6693 27.5179 6.98453C28.8332 8.29976 29.8765 9.86116 30.5883 11.5796C31.3001 13.298 31.6664 15.1398 31.6664 16.9998ZM17.5026 24.4075C15.024 24.4075 12.8428 23.3735 11.568 21.8438L13.5793 19.8326C14.2166 20.8524 15.7322 21.5747 17.5026 21.5747C19.2731 21.5747 20.7886 20.8524 21.426 19.8326L23.4373 21.8438C22.1625 23.3735 19.9813 24.4075 17.5026 24.4075Z" fill="#501BC0"/>
                    </svg>
                    </span>
                  </div>
                  <div className='flex justify-center'>
                    <p className='border-b-2 mb-2 border-[#8054DE] w-[40%] md:w-[30%] text-center'>Step 1 of 3</p>
                  </div>
                
                {/* Some overlay things go in here */}
                <form action="" onSubmit={handleSubmit} className="space-y-2 mb-12 md:w-full">
                  <div className="space-y-2">
                    <div className="my-2">
                      <label htmlFor="text" className="block text-md font-medium text-[#8054DE]">As an investor or tech startup</label>
                      <select name="" className="w-full p-2 rounded-3xl focus:outline-none cursor-pointer mb-2 px-4 border-[#8054DE] border-2 bg-purple-300">
                      <option value="select" className="text-gray-400" >Select an option</option>
                        <option value="investor">Investor</option>
                        <option value="startup">Startup</option>
                      </select>
                    </div>


                    <Button type='submit' className='w-full px-8 py-2 mb-2 font-semibold rounded-3xl text-white bg-gradient-to-r from-[#84399F] to-[#7B57E1]'>Continue</Button>
                  </div>
                </form>
              </div>
            </div>
          </>
        );
      case '2':
        return (
          <>
            <div className="h-screen flex justify-center items-center bg-[#150741] bg-opacity-75">
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
                <div className='z-20 md:w-[30%] mt-8 md:mt-0 w-[85%]'>
                  <div className='flex justify-center'> 
                  <h2 className='md:text-xl font-bold text-[#8054DE] text-center mb-2 md:mx-2'>
                  Hi, Let's Get Your Details 
                  </h2>
                  <span>
                  <svg width="25" height="24" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.4173 14.1671C27.4173 16.1217 24.4146 17.708 22.46 17.708C20.5054 17.708 18.5649 16.1217 18.5649 14.1671H16.4404C16.4404 16.1217 14.4999 17.708 12.5453 17.708C10.5907 17.708 7.588 16.1217 7.588 14.1671H6.52572C6.29909 15.0736 6.17162 16.0225 6.17162 16.9998C6.17162 20.005 7.36542 22.8871 9.4904 25.0121C11.6154 27.1371 14.4975 28.3309 17.5026 28.3309C20.5078 28.3309 23.3899 27.1371 25.5149 25.0121C27.6399 22.8871 28.8337 20.005 28.8337 16.9998C28.8337 16.0225 28.7062 15.0736 28.4796 14.1671H27.4173ZM17.5026 5.66881C13.3102 5.66881 9.64174 7.94918 7.68714 11.3343H27.3181C25.3635 7.94918 21.6951 5.66881 17.5026 5.66881ZM31.6664 16.9998C31.6664 20.7563 30.1742 24.3589 27.5179 27.0151C24.8617 29.6714 21.2591 31.1636 17.5026 31.1636C15.6426 31.1636 13.8008 30.7973 12.0824 30.0855C10.364 29.3737 8.80257 28.3304 7.48734 27.0151C4.83112 24.3589 3.33887 20.7563 3.33887 16.9998C3.33887 13.2434 4.83112 9.64076 7.48734 6.98453C10.1436 4.32831 13.7462 2.83606 17.5026 2.83606C19.3626 2.83606 21.2044 3.20242 22.9229 3.91421C24.6413 4.62601 26.2027 5.6693 27.5179 6.98453C28.8332 8.29976 29.8765 9.86116 30.5883 11.5796C31.3001 13.298 31.6664 15.1398 31.6664 16.9998ZM17.5026 24.4075C15.024 24.4075 12.8428 23.3735 11.568 21.8438L13.5793 19.8326C14.2166 20.8524 15.7322 21.5747 17.5026 21.5747C19.2731 21.5747 20.7886 20.8524 21.426 19.8326L23.4373 21.8438C22.1625 23.3735 19.9813 24.4075 17.5026 24.4075Z" fill="#501BC0"/>
                  </svg>
                  </span>
                </div>
                <div className='flex justify-center'>
                  <p className='border-b-2 mb-2 border-[#8054DE] w-[40%] md:w-[30%] text-center'>Step 2 of 3</p>
                </div>
                
                {/* Some overlay things go in here */}
                <form action="" onSubmit={handleSubmit} className="space-y-2 mb-12 md:w-full">
                  <div className="space-y-2">
                    <div className="">
                      <label htmlFor="fullname" className="block text-md font-medium text-[#8054DE]">Full Name</label>
                      <input type="text" name="text" id="text" placeholder="Tosin Adewale" className="w-full p-2 rounded-3xl focus:outline-none pl-4 border-[#8054DE] border-2 bg-purple-300" required />
                    </div>

                    <div className="pb-4 space-y-2">
                      <div className="">
                        <label htmlFor="email" className="block text-md font-medium text-[#8054DE]">Email address</label>
                        <input type="email" name="email" id="email" placeholder="cryptoboost@gmail.com" className="w-full p-2 rounded-3xl focus:outline-none pl-4 border-[#8054DE] border-2 bg-purple-300" required />
                      </div>
                    </div>

                    <Button type='submit' className='w-full px-8 py-2 mb-2 font-semibold rounded-3xl text-white bg-gradient-to-r from-[#84399F] to-[#7B57E1]'>Proceed</Button>
                    <p className='text-center px-3'>Already have an account? {''} <a href="/signin" className="text-[#8054DE] font-bold">Sign In</a> </p>
                  </div>
                </form>
              </div>
            </div>
          </>
        );
        case '3':
        return (
          <>
            <div className="h-screen flex justify-center items-center bg-[#150741] bg-opacity-75">
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
            <div className='z-20 md:w-[30%] mt-8 md:mt-0 w-[85%]'>
              <div className='flex justify-center'> 
            <h2 className='md:text-xl font-bold text-[#8054DE] text-center mb-2 md:mx-2'>
            Hi, Let's Get Your Details 
            </h2>
            <span>
            <svg width="25" height="24" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.4173 14.1671C27.4173 16.1217 24.4146 17.708 22.46 17.708C20.5054 17.708 18.5649 16.1217 18.5649 14.1671H16.4404C16.4404 16.1217 14.4999 17.708 12.5453 17.708C10.5907 17.708 7.588 16.1217 7.588 14.1671H6.52572C6.29909 15.0736 6.17162 16.0225 6.17162 16.9998C6.17162 20.005 7.36542 22.8871 9.4904 25.0121C11.6154 27.1371 14.4975 28.3309 17.5026 28.3309C20.5078 28.3309 23.3899 27.1371 25.5149 25.0121C27.6399 22.8871 28.8337 20.005 28.8337 16.9998C28.8337 16.0225 28.7062 15.0736 28.4796 14.1671H27.4173ZM17.5026 5.66881C13.3102 5.66881 9.64174 7.94918 7.68714 11.3343H27.3181C25.3635 7.94918 21.6951 5.66881 17.5026 5.66881ZM31.6664 16.9998C31.6664 20.7563 30.1742 24.3589 27.5179 27.0151C24.8617 29.6714 21.2591 31.1636 17.5026 31.1636C15.6426 31.1636 13.8008 30.7973 12.0824 30.0855C10.364 29.3737 8.80257 28.3304 7.48734 27.0151C4.83112 24.3589 3.33887 20.7563 3.33887 16.9998C3.33887 13.2434 4.83112 9.64076 7.48734 6.98453C10.1436 4.32831 13.7462 2.83606 17.5026 2.83606C19.3626 2.83606 21.2044 3.20242 22.9229 3.91421C24.6413 4.62601 26.2027 5.6693 27.5179 6.98453C28.8332 8.29976 29.8765 9.86116 30.5883 11.5796C31.3001 13.298 31.6664 15.1398 31.6664 16.9998ZM17.5026 24.4075C15.024 24.4075 12.8428 23.3735 11.568 21.8438L13.5793 19.8326C14.2166 20.8524 15.7322 21.5747 17.5026 21.5747C19.2731 21.5747 20.7886 20.8524 21.426 19.8326L23.4373 21.8438C22.1625 23.3735 19.9813 24.4075 17.5026 24.4075Z" fill="#501BC0"/>
            </svg>
            </span>
          </div>
          <div className='flex justify-center'>
            <p className='border-b-2 mb-2 border-[#8054DE] w-[40%] md:w-[30%] text-center'>Step 3 of 3</p>
          </div>
          
          {/* Some overlay things go in here */}
          <form action="" onSubmit={handleSubmit} className="space-y-2 mb-12 md:w-full">
            <div className="space-y-2">
              <div className="">
                <label htmlFor="country" className="block text-md font-medium text-[#8054DE]">Country</label>
                <input type="text" name="text" id="text" placeholder="Nigeria" className="w-full p-2 rounded-3xl focus:outline-none pl-4 border-[#8054DE] border-2 bg-purple-300" required />
              </div>

              <div className="pb-4 space-y-2">
                <div className="">
                <label htmlFor="password" className="leading-1 text-md font-medium text-[#8054DE]">Password</label>
                <div className="relative">
              <input type={showPassword ? "text" : "password"} 
              value={password}
              onChange={handlePasswordChange}
              name="password" 
              id="password" placeholder="****************" 
              className="w-full p-2 mb-3 rounded-3xl focus:outline-none pl-4 outline-[#8054DE] border-[#8054DE] border-2 bg-purple-300"
              required />
              <div className="absolute inset-y-0 right-2 flex items-center">
                <button
                  className="outline-none focus:outline-none pb-3 pr-2"
                  onClick={handleTogglePassword}
                >
                {showPassword ? (
                  <svg width="18x" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#833DA8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3 18 18"></path><path fill="#833DA8" fill-rule="evenodd" d="M5.4 6.23c-.44.33-.843.678-1.21 1.032a15.088 15.088 0 0 0-3.001 4.11 1.435 1.435 0 0 0 0 1.255 15.088 15.088 0 0 0 3 4.111C5.94 18.423 8.518 20 12 20c2.236 0 4.1-.65 5.61-1.562l-3.944-3.943a3 3 0 0 1-4.161-4.161L5.401 6.229zm15.266 9.608a15.06 15.06 0 0 0 2.145-3.21 1.435 1.435 0 0 0 0-1.255 15.086 15.086 0 0 0-3-4.111C18.06 5.577 15.483 4 12 4a10.83 10.83 0 0 0-2.808.363l11.474 11.475z" clip-rule="evenodd"></path></g></svg>
                ) : (
                  <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 12c0-2.25 3.75-7.5 10.5-7.5S22.5 9.75 22.5 12s-3.75 7.5-10.5 7.5S1.5 14.25 1.5 12zM12 16.75a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5zM14.7 12a2.7 2.7 0 1 1-5.4 0 2.7 2.7 0 0 1 5.4 0z" fill="#833DA8"></path></g></svg>
                )}
              </button>
            </div>
          </div>
                </div>
              </div>

              <p className='text-center px-2 text-xs text-white'>By creating an account, you accept the {''} <a href="#" className="text-white underline">Terms of service & privacy policy</a> </p>
              <Button type='submit' className='w-full px-8 py-2 mb-2 font-semibold rounded-3xl text-white bg-gradient-to-r from-[#84399F] to-[#7B57E1]'>Create account</Button>
            </div>
          </form>
        </div>
            </div>
          </>
        );
      case '4':
        return null;
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default SignUp;




// import React, { useState } from 'react';
// import { useRouter } from 'next/router';

// const SignUp = () => {
//   const router = useRouter();
//   const { signup } = router.query;
//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const nextStep = Number(signup) + 1;

//     // Check if it's the final step
//     if (nextStep === 4) {
//       // Show the success page
//       setShowSuccess(true);

//       // Redirect to the signin page after 2 milliseconds
//       setTimeout(() => {
//         router.push('/signin');
//       }, 5);
//     } else {
//       // Redirect to the next step
//       router.push(`/signup/${nextStep}`);
//     }
//   };

//   const renderStep = () => {
//     if (showSuccess) {
//       return (
//         <>
//           <h1>Registration Successful!</h1>
//           <p>Thank you for registering.</p>
//         </>
//       );
//     }

//     switch (signup) {
//       case '1':
//         return (
//           <>
//             <h1>Registration - Step 1</h1>
//             <form onSubmit={handleSubmit}>
//               <label>
//                 First Name:
//                 <input type="text" name="firstName" required />
//               </label>
//               <br />
//               <label>
//                 Last Name:
//                 <input type="text" name="lastName" required />
//               </label>
//               <br />
//               <button type="submit">Next</button>
//             </form>
//           </>
//         );
//       case '2':
//         return (
//           <>
//             <h1>Registration - Step 2</h1>
//             <form onSubmit={handleSubmit}>
//               <label>
//                 Email:
//                 <input type="email" name="email" required />
//               </label>
//               <br />
//               <label>
//                 Password:
//                 <input type="password" name="password" required />
//               </label>
//               <br />
//               <button type="submit">Register</button>
//             </form>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return <div>{renderStep()}</div>;
// };

// export default SignUp;
















// import React, {useEffect} from 'react'
// import { useRouter } from 'next/router';

// const SignUp = () => {
//   const router = useRouter();
//   const { signup } = router.query;

//   useEffect(() => {
//     // Check if the signup query parameter is present
//     if (signup === undefined) {
//       // Redirect to the signin page
//       router.push('/signin');
//     }
//   }, [signup]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const nextStep = Number(signup) + 1;

//    // Check if it's the final step
//    if (nextStep === 3) {
//     // Redirect to the signin page
//     router.push('/signin');
//   } else {
//     // Redirect to the next step
//     router.push(`/signup/${nextStep}`);
//   }
//   };

//   const renderStep = () => {
//     switch (signup) {
//       case '1':
//         return (
//           <>
//             <h1>Registration - Step 1</h1>
//             <form onSubmit={handleSubmit}>
//               <label>
//                 First Name:
//                 <input type="text" name="firstName" required />
//               </label>
//               <br />
//               <label>
//                 Last Name:
//                 <input type="text" name="lastName" required />
//               </label>
//               <br />
//               <button type="submit">Next</button>
//             </form>
//           </>
//         );
//       case '2':
//         return (
//           <>
//             <h1>Registration - Step 2</h1>
//             <form onSubmit={handleSubmit}>
//               <label>
//                 Email:
//                 <input type="email" name="email" required />
//               </label>
//               <br />
//               <label>
//                 Password:
//                 <input type="password" name="password" required />
//               </label>
//               <br />
//               <button type="submit">Register</button>
//             </form>
//           </>
//         );
//       case '3':
//         return (
//           <>
//             <h1>Registration Successful!</h1>
//             <p>Thank you for registering.</p>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return <div>{renderStep()}</div>;
// };

// export default SignUp

