import React from 'react'

const About = () => {
  return (
    <>
    <main className='w-full bg-[#120b29] h-screen'>
      <section className='md:w-[80%] mx-auto w-[90%] h-full flex flex-col justify-center items-center border'>
      <div className='text-center'>
        <h1 className='text-2xl md:text-4xl font-bold text-white'>Funded Projects</h1>
          <p className='text-md md:text-lg text-white'>Enter the cryptosphere with cryptoBoost</p>
        <div className='w-32 h-1 text-center inline-flex mt-0 rounded-3xl bg-pink-600'></div>
      </div>
          <p className='md:text-justify text-center text-lg px-5 text-white'>
            CryptoBoost is a platform aimed at providing a boost to tech startups by facilitating donations and investments from crypto investors. The project aims to bridge the gap between startups seeking funding and the growing community of cryptocurrency enthusiasts. By leveraging the power of blockchain technology and cryptocurrencies, CryptoBoost aims to streamline the funding process, increase accessibility for startups, and provide opportunities for crypto investors to support promising ventures.. 
          </p>
      </section>
    </main>
    </>
  )
}

export default About