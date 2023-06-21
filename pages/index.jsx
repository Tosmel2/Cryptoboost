import React, { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import FundedProjects from '@/components/FundedProjects'
import hashgraphImg from '../assets/images/hashgraph.png';
import solanaImg from '../assets/images/solana.png';
import polygonImg from '../assets/images/polygon.jpeg';
import etherumImg from '../assets/images/etherum.jpeg';
import defiImg from '../assets/images/defi.jpg';
import btcImg from '../assets/images/btc.jpg';
import mmImg from '../assets/images/mm.png';
import m2Img from '../assets/images/m2.png';
import m3Img from '../assets/images/m3.png';
import Testimonials from '@/components/Testimonials';
import Nav from '@/components/Nav';
import Button from '@/components/Button';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [activeCard, setActiveCard] = useState(1);

  const handleCardClick = (cardNumber) => {
    setActiveCard(cardNumber);
  };


  const stats = [
        {
            data: "10K+",
            title: "Projects"
        },
        {
            data: "$150M+",
            title: "Capital Raised"
        },
        {
            data: "40K+",
            title: "Participants"
        },
        {
            data: "30M+",
            title: "Funded Ideas"
        },
    ]
  
  return (
    <main className='h-full w-full bg-[#080512]'>
      <Nav />
      <section className='herobg h-[60vh] md:h-[90vh]'>
        <div className='md:w-[80%] w-[90%] mx-auto md:pt-8 md:pb-6'>
          <div className='flex justify-center md:justify-start items-center h-[60vh]'>
            <div className='w-full md:w-[45%] md:flex md:justify-center md:flex-col pb-5'>
              <h1 className='inter-font text-2xl text-center md:text-4xl font-bold uppercase text-white'>Decentralized Crowdfunding <br /> for Tech Startups.
              </h1>

              <div className='text-center'>
                <Button type='submit' className='md:w-[40%] w-[70%] mt-5 mr-3 px-6 py-2.5 font-semibold rounded-3xl text-white bg-gradient-to-r from-[#84399F] to-[#080512]'>Create project</Button>

                <Button type='submit' className='md:w-[30%] w-[70%] mt-5 px-8 py-2 font-semibold rounded-3xl text-white border-2 border-white hover:bg-gradient-to-r from-[#84399F] to-[#7B57E1]'>Contribute</Button>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className='w-full py-3 md:py-8'>
        <div className='md:h-[50vh] py-2 md:py-4 h-full w-[90%] md:w-[80%] mx-auto md:flex md:justify-between'>
          <div className='md:w-[45%] text-white'>
            <h3 className='pb-2 uppercase '>community-based and open source</h3>
            <h1 className='font-bold uppercase text-xl md:text-3xl mb-2'>unlocking new possibilities in tech</h1>
            <p className='py-3'>
              Find Backers who will bring your dream ideas into life. Pitch, sell yourself, and put yourself forward.
            </p>

            <div className="py-4">
                <ul className="flex items-center justify-between flex-wrap ">
                    {
                        stats.map((item, idx) => (
                            <li key={idx} className="text-start pb-2">
                                <h4 className="text-md md:text-2xl text-purple-800 font-semibold">{item.data}</h4>
                                <p className="text-purple-600 font-medium">{item.title}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <a href="#" className='bg-white rounded-3xl text-black px-5 py-2 mt-2 font-semibold'>Learn More</a>
          </div>

          <div className='md:w-[40%] flex flex-wrap justify-center mt-5 md:mt-0'>
            <div className='md:w-[45%] md:mr-3 mr-1 h-28 w-28 md:h-[45%] md:rounded-2xl'>
              <Image
                src={mmImg}
                className='object-cover border-2 border-purple-600 h-full w-full rounded-full object-center md:rounded-2xl'
                quality={100}
              />
            </div>
            <div className='md:w-[45%] mr-1 h-28 w-28 md:h-[45%] md:rounded-2xl'>
              <Image
                src={m2Img}
                className='object-cover border-2 border-purple-600 h-full w-full rounded-full object-center md:rounded-2xl'
                quality={100}
              />
            </div>

            <div className='md:mt-1 md:w-[45%] h-28 w-28 md:h-[45%] md:rounded-2xl'>
              <Image
                src={m3Img}
                className='object-cover border-2 border-purple-600 h-full w-full object-center rounded-full md:rounded-2xl'
                quality={100}
              />
            </div>
          </div>
        </div>

      </section>



      <section className='why-cryptoboost bg-cover possbg pb-12 md:pb-16' >
        <div className='w-[90%] md:w-[85%] mx-auto md:pt-8 md:pb-6 '>
        
        <div className='text-center text-white py-8 px-0'>
        <h1 className='inter-font text-2xl md:text-3xl font-bold uppercase'>At the center of <br /> cryptoboost.</h1>
        <div className='w-32 h-1 text-center inline-flex mt-0 rounded-3xl bg-pink-600'></div>
        </div>

        <div className='md:flex md:justify-between w-full'>
        <div className='w-full md:w-[40%] md:flex md:justify-center md:flex-col'>
          <button type="button" className="md:w-[40%] mb-1 p-2 font-semibold rounded-xl bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% text-white">Why CryptoBoost?</button>
          <p className='md:text-justif text-lg md:text-xl text-white md:my-0 my-2'>
            We Empower Startups with Decentralized Crowdfunding on the Blockchain Network. We make your tech startup dreams become a reality. Take action now to shape the future and make it a reality.
          </p>
        </div>
        <div className=' w-full md:w-[40%] mt-10 text-white'>
          <div className='mb-3 border px-2 py-1 rounded-md shadow-lg'>
            <h3 className='font-bold w-full mb-2 uppercase'>Top security</h3>
            <p className='w-full md:pr-12'>We host data on distributed network and without the need of traditiona financial intermediaries.</p>
          </div>
          <div className='mb-3 border px-2 py-1 rounded-md shadow-lg'>
            <h3 className='font-bold w-full uppercase mb-2'>Fund cutting-end</h3>
            <p className='w-full md:pr-12'>We give you the chance to showcase your tech startup projects publicly to enable you meet your goals.</p>
          </div>
          <div className='mb-3 border px-2 py-1 rounded-md shadow-lg'>
            <h3 className='font-bold w-full uppercase mb-2'>Fund and launch your start-up</h3>
            <p className='w-full md:pr-12'>We help tech startups to get funds that enable them to launch projects.</p>
          </div>
        </div>
        </div>
        </div>
      </section>



      <FundedProjects />
 
      <Testimonials />

      <section className='sponsorer w-[90%] md:w-[50%] mx-auto pb-10'>
      <div className='testimonial-header text-center text-white py-8 px-0'>
          <h1 className='text-2xl md:text-4xl font-bold'>Trusted Partners</h1>
          <div className='w-32 h-1 text-center inline-flex mt-0 rounded-3xl bg-pink-600'></div>
        </div>
        <div className='py-6'>
          <div className='flex justify-between mb-12'>
            <div className='mr-2 border shadow-lg shadow-slate-500 rounded-lg w-44 h-28'>
              <Image
                src={hashgraphImg}
                className='object-cover h-full w-full object-center rounded-2xl'
                quality={100}
              />
            </div>
            <div className='mr-2 border shadow-lg shadow-slate-500 rounded-lg w-44 h-28'>
              <Image
                src={solanaImg}
                className='object-cover h-full w-full object-center rounded-2xl'
                quality={100}
              />
            </div>
            <div className='border shadow-lg shadow-slate-500 rounded-lg w-44 h-28'>
              <Image
                src={polygonImg}
                className='object-cover h-full w-full object-center rounded-2xl'
                quality={100}
              />
            </div>
          </div>
          <div className='flex justify-between mb-4'>
            <div className='mr-2 border shadow-lg shadow-slate-500 rounded-lg w-44 h-28'>
              <Image
                src={defiImg}
                className='object-cover h-full w-full object-center rounded-2xl'
                quality={100}
              />
            </div>
            <div className='mr-2 border shadow-lg shadow-slate-500 rounded-lg w-44 h-28'>
              <Image
                src={etherumImg}
                className='object-cover h-full w-full object-center rounded-2xl'
                quality={100}
              />
            </div>
            <div className='border shadow-lg shadow-slate-500 rounded-lg w-44 h-28'>
              <Image
                src={btcImg}
                className='object-cover h-full w-full object-center rounded-2xl'
                quality={100}
              />
            </div>
          </div>
          <p className='text-center text-white font-bold mt-3 uppercase'>Trusted Partners</p>
        </div>
      </section>


      <Footer />

    </main>
  )
}
