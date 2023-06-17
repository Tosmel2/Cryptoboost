import React from 'react'

const Test = () => {
  return (
    <div>
      <div className='stacked-divs relative'>
        <div className='w-full p-4 leading-6 bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% mb-5 rounded-xl border border-solid border-white hover:w-full hover:h-full hover:z-20 transition-all duration-300'>
          <div className='h-[20%] flex justify-between items-center'>
            <p className='text-lg text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
          <div className='h-[80%] w-full md:text-start md:mt-4'>
            <h1 className='text-xl font-bold text-center md:text-start text-white'>Just the support I needed</h1>
            <p className='text-medium text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
        </div>

        <div className='absolute right-0 top-15 w-full p-4 leading-6 bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% mb-5 rounded-xl z-10 border border-solid border-white hover:w-full hover:h-full hover:z-20 transition-all duration-300'>
          <div className='h-[20%] flex justify-between items-center'>
            <p className='text-lg text-center md:text-start text-white font-bold'>2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
          <div className='h-[80%] w-full md:text-start md:mt-4'>
            <h1 className='text-xl font-bold text-center md:text-start text-white'>Just the support I needed</h1>
            <p className='text-medium text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
        </div>

        <div className=' p-4 leading-6 bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% mb-5 rounded-xl border border-solid border-white hover:w-full hover:h-full hover:z-20 transition-all duration-300'>
          <div className='h-[20%] flex justify-between items-center'>
            <p className='text-lg text-center md:text-start text-white'>3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
          <div className='h-[80%] w-full md:text-start md:mt-4'>
            <h1 className='text-xl font-bold text-center md:text-start text-white'>Just the support I needed</h1>
            <p className='text-medium text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Test