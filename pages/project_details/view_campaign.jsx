import Footer from '@/components/Footer'
import React from 'react'
import Image from 'next/image'
import solanaImg from '../../assets/images/solana.png';

const ViewCampaign = () => {
  return (
    <>
    <main>
      <div className='rounded-2xl w-full h-[50vh] p-3 md:p-8'>
      <Image
        src={solanaImg}
        className='object-cover h-full w-full object-center rounded-2xl'
        quality={100}
      />
      </div>
      <div className='md:flex md:justify-between md:items-center py-2 px-4 md:px-8'>
        <div className='pb-5 md:w-1/2'>
          <p className='text-justify md:px-3 text-[#4B4B4B]'>
            RoboWorks is a tech start-up that designs and builds robots for a variety of industries, including manufacturing, construction, and logistics. The company's mission is to help businesses increase efficiency, reduce costs, and improve safety by leveraging robotic technology. RoboWorks offers a range of robotic solutions, from robotic arms and automated machinery to mobile robots and drones. Each solution is tailored to the specific needs of the customer, taking into account factors like production volume, safety requirements, and environmental conditions. RoboWorks is committed to staying at the forefront of robotics technology, continuously researching and developing new solutions to meet the evolving needs of their customers. 
          </p>
        </div>
        <div className='md:w-1/2 py-3 md:px-3'>
          <div>
            <div className='flex justify-between items-center inter-font'>
              <h2 className='text-2xl  font-bold'>Bromuno</h2>
              <p className='text-red-900 font-bold text-xs'>Status: <span className='text-center py-2 px-4 rounded-3xl bg-red-200 text-red-700 text-xs font-medium'>Ended</span> </p>
            </div>

            <p className='text-purple-800'>Description</p>
            <p className='mb-2'>Bromuno Works is a tech start-up that designs and builds robots for a variety of industries, including manufacturing, construction, and logistics. 
            </p>
            <p className='text-gray-700'>
              Starts: June 9, 2023 <br />
              End: <span className='ml-4'>June 30, 2023</span> 
            </p>
          </div>
          <div className='bg-orange-300 rounded-md font-bold my-2 md:flex md:justify-between md:first-letter:items-center'>
            <p className='bg-gradient-to-r from-orange-600 to-orange-300 text-white p-2 rounded-md'>
              progress: <span className='ml-4 bg-pink-200 rounded-md text-black p-1'>$225000</span>
            </p>
            <p className='text-purple-800 p-2'>
              $100,000
            </p>
          </div>
        <div className='flex justify-between items-center font-bold'>
          <p className='text-sm text-gray-600'>1 BNB</p>
          <p className='text-sm text-gray-600'>100 BNB</p>
        </div>

        <div className='flex justify-between items-center pt-2'>
          <p className='text-sm font-bold'>
            <span className='mb-1'>Token Sale:</span> <br /> <span className='text-orange-700'>00:07:26:00</span>
          </p>
          {/* <div className='flex'> */}
            <button type="button" className="text-center py-2 px-5 font-semibold rounded-3xl bg-sky-200 text-black">Donate</button>
          {/* </div> */}
        </div>
        </div>
      </div>
      <Footer />
    </main>

    </>
  )
}

export default ViewCampaign

{/* <p>
The company's mission is to help businesses increase efficiency, reduce costs, and improve safety by leveraging robotic technology. RoboWorks offers a range of robotic solutions, from robotic arms and automated machinery to mobile robots and drones. Each solution is tailored to the specific needs of the customer, taking into account factors like production volume, safety requirements, and environmental conditions. RoboWorks is committed to staying at the forefront of robotics technology, continuously researching and developing new solutions to meet the evolving needs of their customers.
</p> */}