import React, { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import solanaImg from '../assets/images/solana.png';
// import Navbar from '@/components/Navbar';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [activeCard, setActiveCard] = useState(1);

  const handleCardClick = (cardNumber) => {
    setActiveCard(cardNumber);
  };
  
  return (
    <main className='h-full w-full bg-[#080512]'>
      {/* <Navbar /> */}
      {/* <section className='herobg h-[80vh]'>
        <div className='w-[90%] mx-auto md:pt-8 md:pb-6'>
          <div className='md:flex md:justify-between md:items-center'>
            <div className='w-full md:w-[50%] md:flex md:justify-center md:flex-col'>
              <h1 className='inter-font text-2xl md:text-3xl font-bold uppercase text-white'>Decentralized Crowdfunding <br /> for Tech Startups.
              </h1>
            </div>
          </div>
        </div>
      </section> */}
      <section className='why-cryptoboost bg-cover possbg pb-12' >
        <div className='w-[90%] mx-auto md:pt-8 md:pb-6 '>
        
        <div className='text-center text-white py-8 px-0'>
        <h1 className='inter-font text-2xl md:text-3xl font-bold uppercase'>At the center of <br /> cryptoboost.</h1>
        </div>

        <div className='md:flex md:justify-between w-full'>
        <div className='w-full md:w-[40%] md:flex md:justify-center md:flex-col'>
          <button type="button" className="md:w-[40%] mb-1 p-2 font-semibold rounded-xl bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% text-white">Why CryptoBoost?</button>
          <p className='md:text-justif text-lg md:text-xl text-white md:my-0 my-2'>
            We Empower Startups with Decentralized Crowdfunding on the Blockchain Network. We make your tech startup dreams become a reality. Take action now to shape the future and make it a reality.
          </p>
        </div>
        <div className=' w-full md:w-[55%] mt-10 text-white'>
          <div className='mb-3 border px-2 py-1 rounded-md shadow-lg'>
            <h3 className='font-bold w-full mb-2 uppercase'>Top security</h3>
            <p className='w-full'>We host data on distributed network and without the need of traditiona financial intermediaries.</p>
          </div>
          <div className='mb-3 border px-2 py-1 rounded-md shadow-lg'>
            <h3 className='font-bold w-full uppercase mb-2'>Fund cutting-end</h3>
            <p className='w-full'>We give you the chance to showcase your tech startup projects publicly to enable you meet your goals.</p>
          </div>
          <div className='mb-3 border px-2 py-1 rounded-md shadow-lg'>
            <h3 className='font-bold w-full uppercase mb-2'>Fund and launch your start-up</h3>
            <p className='w-full'>We help tech startups to get funds that enable them to launch projects.</p>
          </div>
        </div>
        </div>
        </div>
      </section>

      <section className='funding-projects md:py-8  w-[90%] mx-auto'>
        <div className='text-center text-white py-10 px-3 md:px-0'>
        <h1 className='inter-font text-2xl md:text-4xl font-bold'>Funded Projects</h1>
        {/* <p className='text-md md:texy-lg '>Succesful projects that have been funded through the platform</p> */}
        </div>
        
        <div className='projects-container md:flex md:justify-between md:items-center w-full md:flex-wrap'>

          <div className='project-card md:w-[32%] mb-5 rounded-2xl w-full h-[60vh] md:h-[70vh] border border-solid border-white'>
            <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
            <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-2xl'
            quality={100}
            />
            <p className='rounded-3xl px-5 py-1 text-sm text-center bg-white text-amber-500 font-bold absolute bottom-2 right-3'>Upcoming</p>
            </div>
            <div className='project-card-content rounded-b-xl bg-white px-5 h-1/2 w-full'>
              <h2 className='text-2xl font-bold py-2'>Bromuno</h2>
              <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
              <p className='font-semibold py-2'>progress(1%)</p>
              <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'1%'}}></div>
              </div>

              <div className='flex justify-between items-center font-bold'>
                <p className='text-sm text-gray-600'>1 BNB</p>
                <p className='text-sm text-gray-600'>100 BNB</p>
              </div>

              <div className='flex justify-between items-center pt-2'>
                <p>
                  <span className='font-semibold text-sm mb-1'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
                </p>
                <div className='flex'>
                  <span className='cursor-pointer rounded-3xl mr-2 px-5 bg-orange-300 py-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                  </span>
                  <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black">View</button>
                </div>
              </div>
            </div>
          </div>

          <div className='project-card md:w-[32%] mb-5 rounded-2xl w-full h-[60vh] md:h-[70vh] border border-solid border-white'>
            <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
            <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-2xl'
            quality={100}
            />
            <p className='rounded-3xl px-5 py-1 text-sm text-center bg-green-200 text-green-800 font-bold absolute bottom-2 right-3'>Ongoing</p>
            </div>
            <div className='project-card-content rounded-b-xl bg-white px-5 h-1/2 w-full'>
              <h2 className='text-2xl font-bold py-2'>Bromuno</h2>
              <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
              <p className='font-semibold py-2'>progress(25%)</p>
              <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'25%'}}></div>
              </div>

              <div className='flex justify-between items-center font-bold'>
                <p className='text-sm text-gray-600'>25 BNB</p>
                <p className='text-sm text-gray-600'>100 BNB</p>
              </div>

              <div className='flex justify-between items-center pt-2'>
                <p>
                  <span className='font-semibold text-sm mb-1'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
                </p>
                <div className='flex'>
                  <span className='cursor-pointer rounded-3xl mr-2 px-5 bg-orange-300 py-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                  </span>
                  <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black">View</button>
                </div>
              </div>
            </div>
          </div>

          <div className='project-card md:w-[32%] mb-5 rounded-2xl w-full h-[60vh] md:h-[70vh] border border-solid border-white'>
            <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
            <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-2xl'
            quality={100}
            />
            <p className='rounded-3xl px-5 py-1 text-sm text-center bg-red-400 text-red-800 font-bold absolute bottom-2 right-3'>Ended</p>
            </div>
            <div className='project-card-content rounded-b-xl bg-white px-5 h-1/2 w-full'>
              <h2 className='text-2xl font-bold py-2'>Bromuno</h2>
              <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
              <p className='font-semibold py-2'>progress(100%)</p>
              <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div class="bg-sky-400 h-4 rounded-full" style={{width:'100%'}}></div>
              </div>

              <div className='flex justify-between items-center font-bold'>
                <p className='text-sm text-gray-600'>100 BNB</p>
                <p className='text-sm text-gray-600'>100 BNB</p>
              </div>

              <div className='flex justify-between items-center pt-2'>
                <p>
                  <span className='font-semibold text-sm mb-1'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
                </p>
                <div className='flex'>
                  <span className='cursor-pointer rounded-3xl mr-2 px-5 bg-orange-300 py-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                  </span>
                  <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black">View</button>
                </div>
              </div>
            </div>
          </div>

          <div className='project-card md:w-[32%] mb-5 rounded-2xl w-full h-[60vh] md:h-[70vh] border border-solid border-white'>
            <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
            <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-2xl'
            quality={100}
            />
            <p className='rounded-3xl px-5 py-1 text-sm text-center bg-green-200 text-green-800 font-bold absolute bottom-2 right-3'>Ongoing</p>
            </div>
            <div className='project-card-content rounded-b-xl bg-white px-5 h-1/2 w-full'>
              <h2 className='text-2xl font-bold py-2'>Bromuno</h2>
              <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
              <p className='font-semibold py-2'>progress(25%)</p>
              <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'25%'}}></div>
              </div>

              <div className='flex justify-between items-center font-bold'>
                <p className='text-sm text-gray-600'>25 BNB</p>
                <p className='text-sm text-gray-600'>100 BNB</p>
              </div>

              <div className='flex justify-between items-center pt-2'>
                <p>
                  <span className='font-semibold text-sm mb-1'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
                </p>
                <div className='flex'>
                  <span className='cursor-pointer rounded-3xl mr-2 px-5 bg-orange-300 py-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                  </span>
                  <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black">View</button>
                </div>
              </div>
            </div>
          </div>

          <div className='project-card md:w-[32%] mb-5 rounded-2xl w-full h-[60vh] md:h-[70vh] border border-solid border-white'>
            <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
            <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-2xl'
            quality={100}
            />
            <p className='rounded-3xl px-5 py-1 text-sm text-center bg-red-400 text-red-800 font-bold absolute bottom-2 right-3'>Ended</p>
            </div>
            <div className='project-card-content rounded-b-xl bg-white px-5 h-1/2 w-full'>
              <h2 className='text-2xl font-bold py-2'>Bromuno</h2>
              <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
              <p className='font-semibold py-2'>progress(100%)</p>
              <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div class="bg-sky-400 h-4 rounded-full" style={{width:'100%'}}></div>
              </div>

              <div className='flex justify-between items-center font-bold'>
                <p className='text-sm text-gray-600'>100 BNB</p>
                <p className='text-sm text-gray-600'>100 BNB</p>
              </div>

              <div className='flex justify-between items-center pt-2'>
                <p>
                  <span className='font-semibold text-sm mb-1'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
                </p>
                <div className='flex'>
                  <span className='cursor-pointer rounded-3xl mr-2 px-5 bg-orange-300 py-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                  </span>
                  <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black">View</button>
                </div>
              </div>
            </div>
          </div>

          <div className='project-card md:w-[32%] mb-5 rounded-2xl w-full h-[60vh] md:h-[70vh] border border-solid border-white'>
            <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
            <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-2xl'
            quality={100}
            />
            <p className='rounded-3xl px-5 py-1 text-sm text-center bg-white text-amber-500 font-bold absolute bottom-2 right-3'>Upcoming</p>
            </div>
            <div className='project-card-content rounded-b-xl bg-white px-5 h-1/2 w-full'>
              <h2 className='text-2xl font-bold py-2'>Bromuno</h2>
              <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
              <p className='font-semibold py-2'>progress(1%)</p>
              <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'1%'}}></div>
              </div>

              <div className='flex justify-between items-center font-bold'>
                <p className='text-sm text-gray-600'>1 BNB</p>
                <p className='text-sm text-gray-600'>100 BNB</p>
              </div>

              <div className='flex justify-between items-center pt-2'>
                <p>
                  <span className='font-semibold text-sm mb-1'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
                </p>
                <div className='flex'>
                  <span className='cursor-pointer rounded-3xl mr-2 px-5 bg-orange-300 py-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                  </span>
                  <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black">View</button>
                </div>
              </div>
            </div>
          </div>





        </div>
      </section>

      <section className='testimonial w-[90%]  mx-auto'>
        <div className='testimonial-header text-center text-white py-8 px-0'>
          <h1 className='text-2xl md:text-4xl font-bold'>Testimonials</h1>
          <p className='text-lg '>Hear from the horses mouth and be inspired</p>
        </div>

        <div className='md:flex md:justify-between md:items-center md:h-[40vh]'>
          <div className='md:w-[32%] p-4 leading-6 bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% mb-5 rounded-xl w-full border border-solid border-white'>
            <div className='h-[20%] flex justify-between items-center'>
              <p className='text-lg text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </p>
            </div>
            <div className='h-[80%] w-full md:text-start md:mt-4'>
              <h1 className='text-xl font-bold text-center md:text-start text-white'>Just the support I needed</h1>
              <p className='text-medium text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='md:w-[32%] p-4 leading-6 bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% mb-5 rounded-xl w-full border border-solid border-white'>
            <div className='h-[20%] flex justify-between items-center'>
              <p className='text-lg text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </p>
            </div>
            <div className='h-[80%] w-full md:text-start md:mt-4'>
              <h1 className='text-xl font-bold text-center md:text-start text-white'>Just the support I needed</h1>
              <p className='text-medium text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='md:w-[32%] p-4 leading-6 bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% mb-5 rounded-xl w-full border border-solid border-white'>
            <div className='h-[20%] flex justify-between items-center'>
              <p className='text-lg text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </p>
            </div>
            <div className='h-[80%] w-full md:text-start md:mt-4'>
              <h1 className='text-xl font-bold text-center md:text-start text-white'>Just the support I needed</h1>
              <p className='text-medium text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

        </div>
      </section>

      <section className='ongoing-projects w-[90%] mx-auto md:py-10'>
        <div className='text-center text-white py-8 px-0'>
        <h1 className='text-2xl md:text-4xl font-bold'>Ongoing Projects</h1>
        <p className='text-md md:texy-lg '>Lists of ongoing projects to invest in.</p>
        </div>
        <div className='ong-projects-container md:flex md:justify-between md:items-center w-full md:flex-wrap'>

          <div className='ong-project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='ong-project-card-image rounded-xl md:rounded-b-none -xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='ong-project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='ong-project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='ong-project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='ong-project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='ong-project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

        </div>
      </section>


      <Footer />

    </main>
  )
}
