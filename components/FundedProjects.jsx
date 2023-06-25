import React from 'react'
import { useState, useEffect } from 'react';

import Image from 'next/image'
import solanaImg from '../assets/images/solana.png';
import roboImg from '../assets/images/robo.png';
import lmsImg from '../assets/images/lms.png';
import studionft from '../assets/images/studionft.png';
// import etherumImg from '../assets/images/etherum.jpeg';
// import defiImg from '../assets/images/defi.jpg';
// import btcImg from '../assets/images/btc.jpg';




const FundedProjects = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (selectedTab === 'all') {
      setProjects([<AllProjects />]);
    } else if (selectedTab === 'ongoing') {
      setProjects([<OngoingProjects />]);
    } else if (selectedTab === 'upcoming') {
      setProjects([<UpcomingProjects />]);
    } else if (selectedTab === 'completed') {
      setProjects([<CompletedProjects />]);
    }
  }, [selectedTab]);
  
  return (
    <>
    <main className='h-full w-full bg-[#120b29]'>
        <section id='features' className='funding-projects md:py-4  w-[90%] md:w-[85%] mx-auto'>
        <div className='text-center text-white py-10 px-3 md:px-0'>
          <h1 className='text-2xl md:text-4xl font-bold'>Funded Projects</h1>
          <p className='text-md md:text-lg'>Enter the cryptosphere with cryptoBoost</p>
          <div className='w-32 h-1 text-center inline-flex mt-0 rounded-3xl bg-pink-600'></div>
        </div>

        <div className='projects-container flex md:justify-evenly pb-10 justify-center items-center w-full flex-wrap'>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('all');
            }}
            class={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-white font-bold inline-flex items-center leading-none ${
              selectedTab === 'all' ? `py-3 px-5 bg-pink-600 rounded-3xl mb-3 text-white` : 'border-gray-200'
            } tracking-wider`}
          >
            All Funded Projects
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('ongoing');
            }}
            className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-400 font-bold inline-flex items-center leading-none ${
              selectedTab === 'ongoing' ? `py-3 px-5 bg-pink-600 rounded-3xl mb-3 text-white` : 'border-gray-200'
            } tracking-wider`}
          >
            Ongoing Projects
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('upcoming');
            }}
            className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-400 font-bold inline-flex items-center leading-none ${
              selectedTab === 'upcoming' ? `py-3 px-5 bg-pink-600 rounded-3xl mb-3` : 'border-gray-200'
            } tracking-wider`}
          >
            Upcoming Projects
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('completed');
            }}
            className={`sm:px-6 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-400 font-bold inline-flex items-center leading-none ${
              selectedTab === 'completed' ? `py-3 px-5 bg-pink-600 rounded-3xl mb-3` : 'border-gray-200'
            } tracking-wider`}
          >
            Completed Projects
          </a>

          {projects.map((project, index) => (
            <div key={index} class="w-full mt-5">
              {project}
            </div>
          ))}
        </div>
    </section>
    </main>
    </>
  )
}

export default FundedProjects


export const AllProjects = () => {
  return (
    <>
      <div className='projects-container md:flex md:justify-between md:items-center w-full md:flex-wrap'>

        <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] border border-solid border-white'>
            <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
            <Image
            src={roboImg}
            className='object-cover h-full w-full object-center rounded-2xl'
            quality={100}
            />
            <p className='rounded-3xl px-5 py-1 text-sm text-center bg-white text-amber-500 font-bold absolute bottom-2 right-3'>Upcoming</p>
            </div>
            <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
              <h2 className='text-2xl font-bold py-2 text-black'>RoboWorks</h2>
              <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
              <p className='font-semibold py-2 text-black'>progress(1%)</p>
              <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'1%'}}></div>
              </div>

              <div className='flex justify-between items-center font-bold'>
                <p className='text-sm text-gray-600'>1 BNB</p>
                <p className='text-sm text-gray-600'>100 BNB</p>
              </div>

              <div className='flex justify-between items-center pt-2'>
                <p>
                  <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
                </p>
                <div className='flex'>
                  <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                  </span>
                  <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
                </div>
              </div>
            </div>
          </div>

          <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] border border-solid border-white'>
            <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
            <Image
            src={lmsImg}
            className='object-cover h-full w-full object-center rounded-2xl'
            quality={100}
            />
            <p className='rounded-3xl px-5 py-1 text-sm text-center bg-white text-amber-500 font-bold absolute bottom-2 right-3'>Upcoming</p>
            </div>
            <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
              <h2 className='text-2xl font-bold py-2 text-black'>Web3 LMS</h2>
              <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
              <p className='font-semibold py-2 text-black'>progress(1%)</p>
              <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'1%'}}></div>
              </div>

              <div className='flex justify-between items-center font-bold'>
                <p className='text-sm text-gray-600'>1 BNB</p>
                <p className='text-sm text-gray-600'>100 BNB</p>
              </div>

              <div className='flex justify-between items-center pt-2'>
                <p>
                  <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
                </p>
                <div className='flex'>
                  <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                  </span>
                  <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
                </div>
              </div>
            </div>
          </div>

          <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] border border-solid border-white'>
            <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
            <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-2xl'
            quality={100}
            />
            <p className='rounded-3xl px-5 py-1 text-sm text-center bg-green-200 text-green-800 font-bold absolute bottom-2 right-3'>Ongoing</p>
            </div>
            <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
              <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
              <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
              <p className='font-semibold py-2 text-black'>progress(25%)</p>
              <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'25%'}}></div>
              </div>

              <div className='flex justify-between items-center font-bold'>
                <p className='text-sm text-gray-600'>25 BNB</p>
                <p className='text-sm text-gray-600'>100 BNB</p>
              </div>

              <div className='flex justify-between items-center pt-2'>
                <p>
                  <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
                </p>
                <div className='flex'>
                  <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                  </span>
                  <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
                </div>
              </div>
            </div>
          </div>

          <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] border border-solid border-white'>
            <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
            <Image
            src={studionft}
            className='object-cover h-full w-full object-center rounded-2xl'
            quality={100}
            />
            <p className='rounded-3xl px-5 py-1 text-sm text-center bg-white text-amber-500 font-bold absolute bottom-2 right-3'>Upcoming</p>
            </div>
            <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
              <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
              <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
              <p className='font-semibold py-2 text-black'>progress(1%)</p>
              <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'1%'}}></div>
              </div>

              <div className='flex justify-between items-center font-bold'>
                <p className='text-sm text-gray-600'>1 BNB</p>
                <p className='text-sm text-gray-600'>100 BNB</p>
              </div>

              <div className='flex justify-between items-center pt-2'>
                <p>
                  <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
                </p>
                <div className='flex'>
                  <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                  </span>
                  <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black">View</button>
                </div>
              </div>
            </div>
          </div>

          <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] border border-solid border-white'>
            <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
            <Image
            src={studionft}
            className='object-cover h-full w-full object-center rounded-2xl'
            quality={100}
            />
            <p className='rounded-3xl px-5 py-1 text-sm text-center bg-red-400 text-red-800 font-bold absolute bottom-2 right-3'>Ended</p>
            </div>
            <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
              <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
              <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
              <p className='font-semibold py-2 text-black'>progress(100%)</p>
              <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div class="bg-sky-400 h-4 rounded-full" style={{width:'100%'}}></div>
              </div>

              <div className='flex justify-between items-center font-bold'>
                <p className='text-sm text-gray-600'>100 BNB</p>
                <p className='text-sm text-gray-600'>100 BNB</p>
              </div>

              <div className='flex justify-between items-center pt-2'>
                <p>
                  <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
                </p>
                <div className='flex'>
                  <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                  </span>
                  <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black">View</button>
                </div>
              </div>
            </div>
          </div>

          <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] md:h-[70vh] border border-solid border-white'>
            <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
            <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-2xl'
            quality={100}
            />
            <p className='rounded-3xl px-5 py-1 text-sm text-center bg-green-200 text-green-800 font-bold absolute bottom-2 right-3'>Ongoing</p>
            </div>
            <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
              <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
              <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
              <p className='font-semibold py-2 text-black'>progress(25%)</p>
              <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'25%'}}></div>
              </div>

              <div className='flex justify-between items-center font-bold'>
                <p className='text-sm text-gray-600'>25 BNB</p>
                <p className='text-sm text-gray-600'>100 BNB</p>
              </div>

              <div className='flex justify-between items-center pt-2'>
                <p>
                  <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
                </p>
                <div className='flex'>
                  <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                  </span>
                  <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black">View</button>
                </div>
              </div>
            </div>
          </div>

          <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] md:h-[70vh] border border-solid border-white'>
            <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
            <Image
            src={studionft}
            className='object-cover h-full w-full object-center rounded-2xl'
            quality={100}
            />
            <p className='rounded-3xl px-5 py-1 text-sm text-center bg-red-400 text-red-800 font-bold absolute bottom-2 right-3'>Ended</p>
            </div>
            <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
              <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
              <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
              <p className='font-semibold py-2 text-black'>progress(100%)</p>
              <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div class="bg-sky-400 h-4 rounded-full" style={{width:'100%'}}></div>
              </div>

              <div className='flex justify-between items-center font-bold'>
                <p className='text-sm text-gray-600'>100 BNB</p>
                <p className='text-sm text-gray-600'>100 BNB</p>
              </div>

              <div className='flex justify-between items-center pt-2'>
                <p>
                  <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
                </p>
                <div className='flex'>
                  <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                  </span>
                  <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black">View</button>
                </div>
              </div>
            </div>
          </div>

          <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] md:h-[70vh] border border-solid border-white'>
            <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
            <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-2xl'
            quality={100}
            />
            <p className='rounded-3xl px-5 py-1 text-sm text-center bg-white text-amber-500 font-bold absolute bottom-2 right-3'>Upcoming</p>
            </div>
            <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
              <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
              <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
              <p className='font-semibold py-2 text-black'>progress(1%)</p>
              <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'1%'}}></div>
              </div>

              <div className='flex justify-between items-center font-bold'>
                <p className='text-sm text-gray-600'>1 BNB</p>
                <p className='text-sm text-gray-600'>100 BNB</p>
              </div>

              <div className='flex justify-between items-center pt-2'>
                <p>
                  <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
                </p>
                <div className='flex'>
                  <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                  </span>
                  <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black">View</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      {/* </section> */}
    </>
  )
};

export const OngoingProjects = () => {
  return (
    <>
       <div className='projects-container md:flex md:justify-between md:items-center w-full md:flex-wrap'>

      <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] border border-solid border-white'>
        <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
        <Image
        src={solanaImg}
        className='object-cover h-full w-full object-center rounded-2xl'
        quality={100}
        />
        <p className='rounded-3xl px-5 py-1 text-sm text-center bg-green-200 text-green-800 font-bold absolute bottom-2 right-3'>Ongoing</p>
        </div>
        <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
          <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
          <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
          <p className='font-semibold py-2 text-black'>progress(25%)</p>
          <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'25%'}}></div>
          </div>

          <div className='flex justify-between items-center font-bold'>
            <p className='text-sm text-gray-600'>25 BNB</p>
            <p className='text-sm text-gray-600'>100 BNB</p>
          </div>

          <div className='flex justify-between items-center pt-2'>
            <p>
              <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
            </p>
            <div className='flex'>
              <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
              </span>
              <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] border border-solid border-white'>
        <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
        <Image
        src={studionft}
        className='object-cover h-full w-full object-center rounded-2xl'
        quality={100}
        />
        <p className='rounded-3xl px-5 py-1 text-sm text-center bg-green-200 text-green-800 font-bold absolute bottom-2 right-3'>Ongoing</p>
        </div>
        <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
          <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
          <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
          <p className='font-semibold py-2 text-black'>progress(25%)</p>
          <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'25%'}}></div>
          </div>

          <div className='flex justify-between items-center font-bold'>
            <p className='text-sm text-gray-600'>25 BNB</p>
            <p className='text-sm text-gray-600'>100 BNB</p>
          </div>

          <div className='flex justify-between items-center pt-2'>
            <p>
              <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
            </p>
            <div className='flex'>
              <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
              </span>
              <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] border border-solid border-white'>
        <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
        <Image
        src={solanaImg}
        className='object-cover h-full w-full object-center rounded-2xl'
        quality={100}
        />
        <p className='rounded-3xl px-5 py-1 text-sm text-center bg-green-200 text-green-800 font-bold absolute bottom-2 right-3'>Ongoing</p>
        </div>
        <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
          <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
          <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
          <p className='font-semibold py-2 text-black'>progress(25%)</p>
          <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'25%'}}></div>
          </div>

          <div className='flex justify-between items-center font-bold'>
            <p className='text-sm text-gray-600'>25 BNB</p>
            <p className='text-sm text-gray-600'>100 BNB</p>
          </div>

          <div className='flex justify-between items-center pt-2'>
            <p>
              <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
            </p>
            <div className='flex'>
              <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
              </span>
              <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] border border-solid border-white'>
        <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
        <Image
        src={studionft}
        className='object-cover h-full w-full object-center rounded-2xl'
        quality={100}
        />
        <p className='rounded-3xl px-5 py-1 text-sm text-center bg-green-200 text-green-800 font-bold absolute bottom-2 right-3'>Ongoing</p>
        </div>
        <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
          <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
          <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
          <p className='font-semibold py-2 text-black'>progress(25%)</p>
          <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'25%'}}></div>
          </div>

          <div className='flex justify-between items-center font-bold'>
            <p className='text-sm text-gray-600'>25 BNB</p>
            <p className='text-sm text-gray-600'>100 BNB</p>
          </div>

          <div className='flex justify-between items-center pt-2'>
            <p>
              <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
            </p>
            <div className='flex'>
              <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
              </span>
              <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] md:h-[70vh] border border-solid border-white'>
        <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
        <Image
        src={solanaImg}
        className='object-cover h-full w-full object-center rounded-2xl'
        quality={100}
        />
        <p className='rounded-3xl px-5 py-1 text-sm text-center bg-green-200 text-green-800 font-bold absolute bottom-2 right-3'>Ongoing</p>
        </div>
        <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
          <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
          <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
          <p className='font-semibold py-2 text-black'>progress(25%)</p>
          <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'25%'}}></div>
          </div>

          <div className='flex justify-between items-center font-bold'>
            <p className='text-sm text-gray-600'>25 BNB</p>
            <p className='text-sm text-gray-600'>100 BNB</p>
          </div>

          <div className='flex justify-between items-center pt-2'>
            <p>
              <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
            </p>
            <div className='flex'>
              <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
              </span>
              <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
            </div>
          </div>
        </div>
      </div>

      </div>
      

    </>
  )
};

export const UpcomingProjects= () => {
  return (
    <>
      <div className='projects-container md:flex md:justify-between md:items-center w-full md:flex-wrap'>

        <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] md:h-[70vh] border border-solid border-white'>
        <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
        <Image
        src={studionft}
        className='object-cover h-full w-full object-center rounded-2xl'
        quality={100}
        />
        <p className='rounded-3xl px-5 py-1 text-sm text-center bg-white text-amber-500 font-bold absolute bottom-2 right-3'>Upcoming</p>
        </div>
        <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
          <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
          <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
          <p className='font-semibold py-2 text-black'>progress(1%)</p>
          <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'1%'}}></div>
          </div>

          <div className='flex justify-between items-center font-bold'>
            <p className='text-sm text-gray-600'>1 BNB</p>
            <p className='text-sm text-gray-600'>100 BNB</p>
          </div>

          <div className='flex justify-between items-center pt-2'>
            <p>
              <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
            </p>
            <div className='flex'>
              <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
              </span>
              <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] md:h-[70vh] border border-solid border-white'>
        <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
        <Image
        src={studionft}
        className='object-cover h-full w-full object-center rounded-2xl'
        quality={100}
        />
        <p className='rounded-3xl px-5 py-1 text-sm text-center bg-white text-amber-500 font-bold absolute bottom-2 right-3'>Upcoming</p>
        </div>
        <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
          <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
          <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
          <p className='font-semibold py-2 text-black'>progress(1%)</p>
          <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'1%'}}></div>
          </div>

          <div className='flex justify-between items-center font-bold'>
            <p className='text-sm text-gray-600'>1 BNB</p>
            <p className='text-sm text-gray-600'>100 BNB</p>
          </div>

          <div className='flex justify-between items-center pt-2'>
            <p>
              <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
            </p>
            <div className='flex'>
              <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
              </span>
              <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] md:h-[70vh] border border-solid border-white'>
        <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
        <Image
        src={solanaImg}
        className='object-cover h-full w-full object-center rounded-2xl'
        quality={100}
        />
        <p className='rounded-3xl px-5 py-1 text-sm text-center bg-white text-amber-500 font-bold absolute bottom-2 right-3'>Upcoming</p>
        </div>
        <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
          <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
          <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
          <p className='font-semibold py-2 text-black'>progress(1%)</p>
          <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'1%'}}></div>
          </div>

          <div className='flex justify-between items-center font-bold'>
            <p className='text-sm text-gray-600'>1 BNB</p>
            <p className='text-sm text-gray-600'>100 BNB</p>
          </div>

          <div className='flex justify-between items-center pt-2'>
            <p>
              <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
            </p>
            <div className='flex'>
              <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
              </span>
              <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] md:h-[70vh] border border-solid border-white'>
        <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
        <Image
        src={studionft}
        className='object-cover h-full w-full object-center rounded-2xl'
        quality={100}
        />
        <p className='rounded-3xl px-5 py-1 text-sm text-center bg-white text-amber-500 font-bold absolute bottom-2 right-3'>Upcoming</p>
        </div>
        <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
          <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
          <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
          <p className='font-semibold py-2 text-black'>progress(1%)</p>
          <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div class="bg-sky-400 h-4 rounded-l-lg" style={{width:'1%'}}></div>
          </div>

          <div className='flex justify-between items-center font-bold'>
            <p className='text-sm text-gray-600'>1 BNB</p>
            <p className='text-sm text-gray-600'>100 BNB</p>
          </div>

          <div className='flex justify-between items-center pt-2'>
            <p>
              <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
            </p>
            <div className='flex'>
              <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
              </span>
              <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
};

export const CompletedProjects = () => {
  return (
    <>
       <div className='projects-container flex md:justify-evenly justify-center items-center w-full flex-wrap'>
        <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] md:h-[70vh] border border-solid border-white'>
        <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
        <Image
        src={studionft}
        className='object-cover h-full w-full object-center rounded-2xl'
        quality={100}
        />
        <p className='rounded-3xl px-5 py-1 text-sm text-center bg-red-400 text-red-800 font-bold absolute bottom-2 right-3'>Ended</p>
        </div>
        <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
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
              <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
              </span>
              <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black">View</button>
            </div>
          </div>
        </div>
      </div>

      <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] md:h-[70vh] border border-solid border-white'>
        <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
        <Image
        src={studionft}
        className='object-cover h-full w-full object-center rounded-2xl'
        quality={100}
        />
        <p className='rounded-3xl px-5 py-1 text-sm text-center bg-red-400 text-red-800 font-bold absolute bottom-2 right-3'>Ended</p>
        </div>
        <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
          <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
          <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
          <p className='font-semibold py-2 text-black'>progress(100%)</p>
          <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div class="bg-sky-400 h-4 rounded-full" style={{width:'100%'}}></div>
          </div>

          <div className='flex justify-between items-center font-bold'>
            <p className='text-sm text-gray-600'>100 BNB</p>
            <p className='text-sm text-gray-600'>100 BNB</p>
          </div>

          <div className='flex justify-between items-center pt-2'>
            <p>
              <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
            </p>
            <div className='flex'>
              <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
              </span>
              <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] md:h-[70vh] border border-solid border-white'>
        <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
        <Image
        src={solanaImg}
        className='object-cover h-full w-full object-center rounded-2xl'
        quality={100}
        />
        <p className='rounded-3xl px-5 py-1 text-sm text-center bg-red-400 text-red-800 font-bold absolute bottom-2 right-3'>Ended</p>
        </div>
        <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
          <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
          <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
          <p className='font-semibold py-2 text-black'>progress(100%)</p>
          <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div class="bg-sky-400 h-4 rounded-full" style={{width:'100%'}}></div>
          </div>

          <div className='flex justify-between items-center font-bold'>
            <p className='text-sm text-gray-600'>100 BNB</p>
            <p className='text-sm text-gray-600'>100 BNB</p>
          </div>

          <div className='flex justify-between items-center pt-2'>
            <p>
              <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
            </p>
            <div className='flex'>
              <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
              </span>
              <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] md:h-[70vh] border border-solid border-white'>
        <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
        <Image
        src={studionft}
        className='object-cover h-full w-full object-center rounded-2xl'
        quality={100}
        />
        <p className='rounded-3xl px-5 py-1 text-sm text-center bg-red-400 text-red-800 font-bold absolute bottom-2 right-3'>Ended</p>
        </div>
        <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
          <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
          <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
          <p className='font-semibold py-2 text-black'>progress(100%)</p>
          <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div class="bg-sky-400 h-4 rounded-full" style={{width:'100%'}}></div>
          </div>

          <div className='flex justify-between items-center font-bold'>
            <p className='text-sm text-gray-600'>100 BNB</p>
            <p className='text-sm text-gray-600'>100 BNB</p>
          </div>

          <div className='flex justify-between items-center pt-2'>
            <p>
              <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
            </p>
            <div className='flex'>
              <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
              </span>
              <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className='project-card md:w-[32%] lg:w-[23%] mb-5 rounded-2xl w-full h-[70vh] md:h-[70vh] border border-solid border-white'>
        <div className='project-card-image relative rounded-2xl md:rounded-b-none h-1/2 w-full bg-slate-800'>
        <Image
        src={solanaImg}
        className='object-cover h-full w-full object-center rounded-2xl'
        quality={100}
        />
        <p className='rounded-3xl px-5 py-1 text-sm text-center bg-red-400 text-red-800 font-bold absolute bottom-2 right-3'>Ended</p>
        </div>
        <div className='project-card-content rounded-b-xl bg-white px-2 h-1/2 w-full'>
          <h2 className='text-2xl font-bold py-2 text-black'>Bromuno</h2>
          <h3 className='font-semibold text-lg text-purple-800'>100 BNB</h3>
          <p className='font-semibold py-2 text-black'>progress(100%)</p>
          <div class="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div class="bg-sky-400 h-4 rounded-full" style={{width:'100%'}}></div>
          </div>

          <div className='flex justify-between items-center font-bold'>
            <p className='text-sm text-gray-600'>100 BNB</p>
            <p className='text-sm text-gray-600'>100 BNB</p>
          </div>

          <div className='flex justify-between items-center pt-2'>
            <p>
              <span className='font-semibold text-sm mb-1 text-black'>Token Sale:</span> <br /> <span className='font-bold text-orange-700'>00:07:26:00</span>
            </p>
            <div className='flex'>
              <span className='cursor-pointer rounded-3xl mr-1 px-5 bg-orange-300 py-2'>
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22.088 10.651a2.07 2.07 0 0 0-1.937-1.636S16.2 9.015 15.96 9a5.017 5.017 0 0 0 1.242-3.168c0-2.194-.42-3.457-1.284-3.861a1.768 1.768 0 0 0-1.793.335l-.179.15v.232a7.073 7.073 0 0 1-1.174 3.496 8.993 8.993 0 0 1-2.49 2.649L7.96 12H7v-2H2v13h5v-2h1.796l2.47.966L18.19 22a2.22 2.22 0 0 0 2.045-1.166 1.755 1.755 0 0 0 .062-1.425 2.15 2.15 0 0 0 1.053-1.348 2.19 2.19 0 0 0-.262-1.713 2.253 2.253 0 0 0 .923-1.461 2.165 2.165 0 0 0-.445-1.672 2.705 2.705 0 0 0 .523-2.564zM6 22H3V11h3zm14.571-9.251l-.582.363.525.443a1.27 1.27 0 0 1 .508 1.175 1.359 1.359 0 0 1-.892 1.013l-.747.305.604.533a1.208 1.208 0 0 1 .395 1.227 1.167 1.167 0 0 1-.908.851l-.775.167.485.628a.858.858 0 0 1 .153.939 1.25 1.25 0 0 1-1.148.607h-6.646l-2.472-.966L7 20.007V13h1.473l2.448-3.395a9.933 9.933 0 0 0 2.683-2.867 8.134 8.134 0 0 0 1.328-3.772.654.654 0 0 1 .562-.089c.166.078.708.52.708 2.955a4.09 4.09 0 0 1-1.101 2.614 1.051 1.051 0 0 0-.237 1.06c.25.494.87.494 1.896.494h3.391c.524 0 .847.48.976.928a1.616 1.616 0 0 1-.556 1.821z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
              </span>
              <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-pink-600 text-black"><a href="/project_details">View</a></button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
};