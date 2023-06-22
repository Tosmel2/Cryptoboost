import { AllProjects, UpcomingProjects } from '@/components/FundedProjects'
import React from 'react'

const Campaign = () => {
  return (
    <div className='h-full w-full bg-[#120b29] py-5'>
      <section className='md:py-4  w-[90%] md:w-[85%] mx-auto'>
      <div className='text-center text-white py-10 px-3 md:px-0'>
          <h1 className='text-2xl md:text-4xl font-bold'>All Campaign Projects</h1>
          <p className='text-md md:text-lg'>Enter the cryptosphere with cryptoBoost</p>
          <div className='w-32 h-1 text-center inline-flex mt-0 rounded-3xl bg-pink-600'></div>
        </div>
        <AllProjects />
        <AllProjects />
        <UpcomingProjects />
        <AllProjects />
        <AllProjects />
      </section>

    </div>
  )
}

export default Campaign