import React from 'react'

const About = () => {
  return (
    <>
    <main className='w-full bg-[#120b29] md:h-screen h-full'>
      <section className='md:w-[80%] mx-auto w-[90%] h-full md:pt-20 pt-10'>
      <div className='text-center pb-5'>
        <h1 className='text-2xl md:text-4xl font-bold text-white'>About CryptoBoost</h1>
        <div className='w-32 h-1 text-center inline-flex mt-0 rounded-3xl bg-pink-600'></div>
      </div>
          <p className='text-center md:text-lg px-5 text-white'>
            CryptoBoost is a platform aimed at providing a boost to tech startups by facilitating donations and investments from crypto investors. The project aims to bridge the gap between startups seeking funding and the growing community of cryptocurrency enthusiasts. By leveraging the power of blockchain technology and cryptocurrencies, CryptoBoost aims to streamline the funding process, increase accessibility for startups, and provide opportunities for crypto investors to support promising ventures.. 
          </p>
          <p className=' text-center md:text-lg px-5 text-white pt-5'>The platform also provide a secure and transparent environment for transactions, leveraging blockchain technology to ensure the integrity of donations and investments. Smart contracts also implemented to automate the investment process, ensuring fairness and accountability.
          </p>
      </section>
    </main>
    </>
  )
}

export default About