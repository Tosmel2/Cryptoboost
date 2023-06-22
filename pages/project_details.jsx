import React from 'react'
import { useState, useEffect } from 'react';

import Image from 'next/image'
// import solanaImg from '../assets/images/solana.png';
import m1Img from '../assets/images/m1.png';
import m2Img from '../assets/images/m2.png';
import m3Img from '../assets/images/m3.png';
import m4Img from '../assets/images/m4.png';
import m5Img from '../assets/images/m5.png';
import mmImg from '../assets/images/mm.png';
import incentivesImg from '../assets/images/incentives.png';





const ProjectDetails = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (selectedTab === 'overview') {
      setProjects([<ProjectOverview  />]);
    } else if (selectedTab === 'contributor') {
      setProjects([<Contributors />]);
    } else if (selectedTab === 'reward') {
      setProjects([<RewardIncentives />]);
    } else if (selectedTab === 'team') {
      setProjects([<TeamMembers />]);
    } else if (selectedTab === 'contact') {
      setProjects([<ContactInfo />]);
    }
  }, [selectedTab]);
  
  return (
    <>
    <main className='h-full w-full bg-[#120b29]'>
        <section className='funding-projects md:py-4  w-[90%] md:w-[85%] mx-auto'>
        <div className='text-center text-white py-10 px-3 md:px-0'>
          <h1 className='text-2xl md:text-4xl font-bold'>Project Overview</h1>
          <div className='w-32 h-1 text-center inline-flex mt-0 rounded-3xl bg-pink-600'></div>
        </div>

        <div className='projects-container flex md:justify-evenly pb-10 justify-center items-center w-full flex-wrap'>
          <div className='bg-pink-200 p-2 rounded-t-xl w-full text-center'>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('overview');
            }}
            class={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-500 font-bold inline-flex items-center leading-none ${
              selectedTab === 'overview' ? `py-3 px-5 bg-pink-600 rounded-3xl text-white` : 'border-gray-200'
            } tracking-wider`}
          >
            Project Overview
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('contributor');
            }}
            className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-500 font-bold inline-flex items-center leading-none ${
              selectedTab === 'contributor' ? `py-3 px-5 bg-pink-600 rounded-3xl text-white` : 'border-gray-200'
            } tracking-wider`}
          >
            Contributors
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('reward');
            }}
            className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-500 font-bold inline-flex items-center leading-none ${
              selectedTab === 'reward' ? `py-3 px-5 bg-pink-600 rounded-3xl text-white` : 'border-gray-200'
            } tracking-wider`}
          >
            Reward/Incentives
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('team');
            }}
            className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-500 font-bold inline-flex items-center leading-none ${
              selectedTab === 'team' ? `py-3 px-5 bg-pink-600 rounded-3xl text-white` : 'border-gray-200'
            } tracking-wider`}
          >
            Team Members
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('contact');
            }}
            className={`sm:px-6 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-500 font-bold inline-flex items-center leading-none ${
              selectedTab === 'contact' ? `py-3 px-5 bg-pink-600 rounded-3xl text-white` : 'border-gray-200'
            } tracking-wider`}
          >
            Contact Information
          </a>
          </div>

          {projects.map((project, index) => (
            <div key={index} class="w-full mt-2">
              {project}
            </div>
          ))}
        </div>
    </section>
    </main>
    </>
  )
}

export default ProjectDetails


export const ProjectOverview = () => {
  return (
    <>
      <div className='md:flex md:justify-between md:items-center py-2 px-4 md:px-8'>
        <div className='flex justify-center h-screen'>
          <p className='md:text-justify text-center text-lg px-5 text-white'>
            Bromuno is a tech start-up that designs and builds robots for a variety of industries, including manufacturing, construction, and logistics. The company's mission is to help businesses increase efficiency, reduce costs, and improve safety by leveraging robotic technology. RoboWorks offers a range of robotic solutions, from robotic arms and automated machinery to mobile robots and drones. Each solution is tailored to the specific needs of the customer, taking into account factors like production volume, safety requirements, and environmental conditions. RoboWorks is committed to staying at the forefront of robotics technology, continuously researching and developing new solutions to meet the evolving needs of their customers. 
          </p>
        </div>
      </div>
    </>
  )
};

export const Contributors = () => {
  return (
    <>
      <section className='contributors py-10'>
        <div className="md:flex md:justify-between items-center w-[95%] mx-auto p-2 mb-5 bg-pink-200 rounded-lg">
          <div className='md:flex md:justify-between md:w-[35%] md:items-center'>
            <div className='flex items-center'>
              <img alt="" className="w-10 h-10 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?1" /> 
              <p>Tosmel Tungsten</p>
            </div>
            <p className='font-bold'><span className='text-purple-700 font-medium'>Contributed:</span> $3.50</p>
          </div>
          <div className='md:flex md:justify-end md:w-[65%] md:items-center'>
            <p className='md:w-[75%]'><span className='text-purple-700'>Remark:</span> I hope for the best here in this project, kudos to the team</p>
            <p className='md:w-[18%] '><span className='text-purple-700'>Date:</span> 3 Nov 2022</p>
          </div>
        </div>

        <div className="md:flex md:justify-between items-center w-[95%] mx-auto p-2 mb-5 bg-pink-200 rounded-lg">
          <div className='md:flex md:justify-between md:w-[35%] md:items-center'>
            <div className='flex items-center'>
              <img alt="" className="w-10 h-10 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?3" /> 
              <p>Tosmel Tungsten</p>
            </div>
            <p className='font-bold'><span className='text-purple-700 font-medium'>Contributed:</span> $10.50</p>
          </div>
          <div className='md:flex md:justify-end md:w-[65%] md:items-center'>
            <p className='md:w-[75%]'><span className='text-purple-700'>Remark:</span> -</p>
            <p className='md:w-[18%] '><span className='text-purple-700'>Date:</span> 3 Nov 2022</p>
          </div>
        </div>

        <div className="md:flex md:justify-between items-center w-[95%] mx-auto p-2 mb-5 bg-pink-200 rounded-lg">
          <div className='md:flex md:justify-between md:w-[35%] md:items-center'>
            <div className='flex items-center'>
              <img alt="" className="w-10 h-10 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?2" /> 
              <p>Ami Boost</p>
            </div>
            <p className='font-bold'><span className='text-purple-700 font-medium'>Contributed:</span> $13.50</p>
          </div>
          <div className='md:flex md:justify-end md:w-[65%] md:items-center'>
            <p className='md:w-[75%]'><span className='text-purple-700'>Remark:</span> I hope for the best here in this project, kudos to the team</p>
            <p className='md:w-[18%] '><span className='text-purple-700'>Date:</span> 3 Nov 2022</p>
          </div>
        </div>

        <div className="md:flex md:justify-between items-center w-[95%] mx-auto p-2 mb-5 bg-pink-200 rounded-lg">
          <div className='md:flex md:justify-between md:w-[35%] md:items-center'>
            <div className='flex items-center'>
              <img alt="" className="w-10 h-10 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?5" /> 
              <p>Chike Boost</p>
            </div>
            <p className='font-bold'><span className='text-purple-700 font-medium'>Contributed:</span> $30</p>
          </div>
          <div className='md:flex md:justify-end md:w-[65%] md:items-center'>
            <p className='md:w-[75%]'><span className='text-purple-700'>Remark:</span> -</p>
            <p className='md:w-[18%] '><span className='text-purple-700'>Date:</span> 3 Nov 2022</p>
          </div>
        </div>

        <div className="md:flex md:justify-between items-center w-[95%] mx-auto p-2 mb-5 bg-pink-200 rounded-lg">
          <div className='md:flex md:justify-between md:w-[35%] md:items-center'>
            <div className='flex items-center'>
              <img alt="" className="w-10 h-10 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?4" /> 
              <p>Tosin Adewale</p>
            </div>
            <p className='font-bold'><span className='text-purple-700 font-medium'>Contributed:</span> $40</p>
          </div>
          <div className='md:flex md:justify-end md:w-[65%] md:items-center'>
            <p className='md:w-[75%]'><span className='text-purple-700'>Remark:</span> Best for now, I believe in the vision</p>
            <p className='md:w-[18%] '><span className='text-purple-700'>Date:</span> 3 Nov 2022</p>
          </div>
        </div>

        <div className="md:flex md:justify-between items-center w-[95%] mx-auto p-2 mb-5 bg-pink-200 rounded-lg">
          <div className='md:flex md:justify-between md:w-[35%] md:items-center'>
            <div className='flex items-center'>
              <img alt="" className="w-10 h-10 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?1" /> 
              <p>Henry Hasel</p>
            </div>
            <p className='font-bold'><span className='text-purple-700 font-medium'>Contributed:</span> $60</p>
          </div>
          <div className='md:flex md:justify-end md:w-[65%] md:items-center'>
            <p className='md:w-[75%]'><span className='text-purple-700'>Remark:</span> I hope for the best here in this project, kudos to the team</p>
            <p className='md:w-[18%] '><span className='text-purple-700'>Date:</span> 3 Nov 2022</p>
          </div>
        </div>

      </section> 

    </>
  )
};

export const RewardIncentives= () => {
  return (
    <>
      <section  className='md:flex md:justify-between w-[90%] mx-auto md:p-2'>
        <div className='w-full md:w-[35%] h-[50vh] rounded-lg py-3'>
          <Image
            src={incentivesImg}
            className='object-cover h-full w-full object-center rounded-md'
            quality={100}
            />
        </div>
        <div className='md:w-[60%] w-full text-white'>
          <h2 className='inter-font text-xl md:text-2xl font-bold mb-4'>
            As a tech start-up, Cryptoboost can offer various rewards and 
            incentives to its investors. Here are a few options:
          </h2>
          <ul className=''>
            <li className='mb-3 text-base'>
              <span className='font-bold'>- Equity: </span>One of the most common incentives for investors is equity in the company. By offering equity, investors become part owners of the company and can share in its success through dividends and capital gains.
            </li>
            <li className='mb-3 text-base'>
              <span className='font-bold'>- Early Access to Products: </span>Investors can be given early access to RoboWorks' products before they are available to the general public. This can be a valuable incentive, especially for investors who are interested in using the products themselves or have connections in industries where the products could be useful.
            </li>
            <li className='mb-3 text-base'>
              <span className='font-bold'>- Discounts on Products or Services:</span> Investors can be given discounts on RoboWorks' products or services as a way of showing appreciation for their support. This can also help incentivize them to continue investing in the company.
            </li>
            <li className='mb-3 text-base'>
              <span className='font-bold'>- Exclusive Events or Access: </span>Investors can be given exclusive access to events or opportunities related to RoboWorks. This could include things like VIP tours of the company's facilities or invitations to exclusive industry events where they can network and learn more about the latest trends and developments.
            </li>
            <li className='mb-3 text-base'>
              <span className='font-bold'>- Recognition and Branding: </span>Investors can be recognized and given branding opportunities to show their support for RoboWorks. This could include things like having their names listed on the company website or being featured in marketing materials.Ultimately, the rewards and incentives offered to investors will depend on the goals and needs of the company, as well as the interests and priorities of the investors themselves. It's important to find a balance that is mutually beneficial and helps build a strong relationship between the company and its investors.
            </li>
          </ul>
        </div>
      </section>
    </>
  )
};


export const TeamMembers= () => {
  return (
    <>
       <section className='w-[90%] md:w-[85%] mx-auto py-10'>
        <div className='md:flex md:justify-center bg-[#DEF1E9] md:h-[35vh] h-full rounded-md mb-8'>
          <div className='w-full md:w-[40%] rounded-md'>
          <Image
            src={m5Img}
            className='object-cover h-full w-full object-center rounded-md'
            quality={100}
            />
          </div>
          <div className='w-full md:w-[60%] p-4'>
              <h2 className='font-bold text-lg'>
                Tosin Adewale
              </h2>
              <h3 className='text-sm mb-2'>
                Software Engineer
              </h3>
              <p className='text-[#842ea3]'>
                Description
              </p>
              <p>
              Tosin Adewale, the software developer at RoboWorks, is a computer science graduate from Stanford University. He has extensive experience in software development, having previously worked at Google and Amazon. He specializes in developing algorithms and control systems for robotics applications.
            </p>
          </div>
        </div>

        <div className='md:flex md:justify-center bg-[#DEF1E9] md:h-[35vh]  rounded-md mb-8'>
          <div className='w-full md:w-[40%] rounded-md'>
          <Image
            src={mmImg}
            className='object-cover h-full w-full object-center rounded-md'
            quality={100}
            />
          </div>
          <div className='w-full md:w-[60%] p-4'>
              <h2 className='font-bold text-lg'>
                Henry Hasel
              </h2>
              <h3 className='text-sm mb-2'>
                UI/UX Designer
              </h3>
              <p className='text-[#842ea3]'>
                Description
              </p>
              <p>
              Tosin Adewale, the software developer at RoboWorks, is a computer science graduate from Stanford University. He has extensive experience in software development, having previously worked at Google and Amazon. He specializes in developing algorithms and control systems for robotics applications.
            </p>
          </div>
        </div>

        <div className='md:flex md:justify-center bg-[#DEF1E9] md:h-[35vh]  rounded-md mb-8'>
          <div className='w-full md:w-[40%] rounded-md'>
          <Image
            src={m3Img}
            className='object-cover h-full w-full object-center rounded-md'
            quality={100}
            />
          </div>
          <div className='w-full md:w-[60%] p-4'>
              <h2 className='font-bold text-lg'>
               Mohammed Amu
              </h2>
              <h3 className='text-sm mb-2'>
                UI/UX Designer
              </h3>
              <p className='text-[#842ea3]'>
                Description
              </p>
              <p>
              Tosin Adewale, the software developer at RoboWorks, is a computer science graduate from Stanford University. He has extensive experience in software development, having previously worked at Google and Amazon. He specializes in developing algorithms and control systems for robotics applications.
            </p>
          </div>
        </div>

        <div className='md:flex md:justify-center bg-[#DEF1E9] md:h-[35vh] rounded-md mb-8'>
          <div className='w-full md:w-[40%] rounded-md'>
          <Image
            src={m2Img}
            className='object-cover h-full w-full object-center rounded-md'
            quality={100}
            />
          </div>
          <div className='w-full md:w-[60%] p-4'>
              <h2 className='font-bold text-lg'>
                Chike 3ill
              </h2>
              <h3 className='text-sm mb-2'>
                Smart Contract Developer
              </h3>
              <p className='text-[#842ea3]'>
                Description
              </p>
              <p>
              Tosin Adewale, the software developer at RoboWorks, is a computer science graduate from Stanford University. He has extensive experience in software development, having previously worked at Google and Amazon. He specializes in developing algorithms and control systems for robotics applications.
            </p>
          </div>
        </div>

        <div className='md:flex md:justify-center bg-[#DEF1E9] md:h-[35vh]  rounded-md mb-8'>
          <div className='w-full md:w-[40%] rounded-md'>
          <Image
            src={m1Img}
            className='object-cover h-full w-full object-center rounded-md'
            quality={100}
            />
          </div>
          <div className='w-full md:w-[60%] p-4'>
              <h2 className='font-bold text-lg'>
                Emmanuel Dev
              </h2>
              <h3 className='text-sm mb-2'>
                Backend Engineer
              </h3>
              <p className='text-[#842ea3]'>
                Description
              </p>
              <p>
              Tosin Adewale, the software developer at RoboWorks, is a computer science graduate from Stanford University. He has extensive experience in software development, having previously worked at Google and Amazon. He specializes in developing algorithms and control systems for robotics applications.
            </p>
          </div>
        </div>

        <div className='md:flex md:justify-center bg-[#DEF1E9] md:h-[35vh]  rounded-md mb-8'>
          <div className='w-full md:w-[40%] rounded-md'>
          <Image
            src={m4Img}
            className='object-cover h-full w-full object-center rounded-md'
            quality={100}
            />
          </div>
          <div className='w-full md:w-[60%] p-4'>
              <h2 className='font-bold text-lg'>
                Tosin Adewale
              </h2>
              <h3 className='text-sm mb-2'>
                Software Engineer
              </h3>
              <p className='text-[#842ea3]'>
                Description
              </p>
              <p>
              Tosin Adewale, the software developer at RoboWorks, is a computer science graduate from Stanford University. He has extensive experience in software development, having previously worked at Google and Amazon. He specializes in developing algorithms and control systems for robotics applications.
            </p>
          </div>
        </div>

      </section>
    </>
  )
};

export const ContactInfo = () => {
  return (
    <>
      <section className='contactus py-10 md:w-[80%] px-3 mx-auto md:flex md:justify-between'>

        <div className='md:w-1/2 pr-8 mb-5 text-white'>
          <h2 className='font-bold text-xl mb-2'>Contact Information</h2>

          <p className='mb-2'>Fill up this form and our team will get back to you within 24 hours.</p>

          <p className='flex w-full items-center mb-2'><span className='mr-1'>
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9 16C2.814 9.813 3.11 5.134 5.94 3.012l.627-.467a1.483 1.483 0 0 1 2.1.353l1.579 2.272a1.5 1.5 0 0 1-.25 1.99L8.476 8.474c-.38.329-.566.828-.395 1.301.316.88 1.083 2.433 2.897 4.246 1.814 1.814 3.366 2.581 4.246 2.898.474.17.973-.015 1.302-.396l1.314-1.518a1.5 1.5 0 0 1 1.99-.25l2.276 1.58a1.48 1.48 0 0 1 .354 2.096l-.47.633C19.869 21.892 15.188 22.187 9 16z" fill="#DB2777"></path></g></svg>
            </span> <span> +2348068957966</span></p>

          <p className='flex w-full items-center mb-2'><span className='mr-1'>
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Communication / Mail"> <path id="Vector" d="M4 6L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123C13.8926 10.6123 17.8101 7.60594 20 6M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z" stroke="#DB2777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
            </span> <span> cryptoboost@gmail.com</span></p>

          <p className='flex w-full items-center mb-3'><span className='mr-1'>
            <svg fill="#DB2777" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="1"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path> </g></svg>
            </span> <span> 1st CryptoBoost winner, Lagos, Nigeria</span>
          </p>

          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
              </svg>
            </a>
          </div>
        </div>

        <div className='bg-white rounded-xl p-2 md:p-6 md:w-1/2'>
        <form action="" className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-bold text-pink-600">Email address</label>
              <input type="email" name="email" id="email" placeholder="crypto@boost.com" className="bg-orange-50 w-full p-2 border rounded-3xl focus:outline-none pl-4 " />
            </div>

            <div className="space-y-1">
              <label htmlFor="number" className="block text-sm font-bold text-pink-600">Phone Number</label>
              <input type="number" name="number" id="number" placeholder="+2340068957966" className="bg-orange-50 w-full p-2 border rounded-3xl focus:outline-none pl-4 " />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="block text-sm font-bold text-pink-600">Drop a message</label>
              <textarea type="text" name="message" rows={10} cols={20} placeholder="Tell us what you feel about the project" className="bg-orange-50 w-full p-2 border rounded-lg focus:outline-none pl-4 resize-none " />
            </div>

            <div className='pt-2'>
            <button type="button" className="md:w-[60%] w-full px-8 py-2 font-semibold rounded-3xl bg-pink-700 text-white">Send message</button>
            </div>
            
          </div>
        </form>
        </div>

      </section>
    </>
  )
};