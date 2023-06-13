import Button from '@/components/Button'
import React from 'react'

const SignUp = () => {
  return (
    <>
    <main className='h-full flex justify-between'>
    <div className='hidden md:block px-16 py-24 md:w-[50%] bg-cyan-400'>
      <h1 className='text-2xl font-bold mb-6'>A highly-curated decentralized crowdfunding platform for tech startups and investors.</h1>

      <div className='mb-6'>
        <h2 className='mb-2 text-lg font-semibold'>
          <span class="after:bg-black after:w-[10px] after:h-[10px] after:inline-block after:mx-2"></span>Fundraising Compaigns</h2>
        <p>A platform for tech startup nto create fundraising campaign and accept contributions in cyptocurrency directly from investors.</p>
      </div>

      <div className='mb-6'>
        <h2 className='mb-2 text-lg font-semibold'>
          <span class="after:bg-black after:w-[10px] after:h-[10px] after:inline-block after:mx-2"></span>Fundraising goals</h2>
        <p>Tech startups have ability to set fundraising goals and deadlines, track the progress of their campaign and communicate with their supports.</p>
      </div>

      <div className='mb-6'>
        <h2 className='mb-2 text-lg font-semibold'>
          <span class="after:bg-black after:w-[10px] after:h-[10px] after:inline-block after:mx-2"></span>Secure Payment System</h2>
        <p>A payment secure that enables investors to contribute cryptocurrency to the campaign and receive tokens or other rewards in return.</p>
      </div>

    </div>

      <div className='w-full md:w-[50%] px-4 bg-cyan-800 py-10 flex flex-col justify-center items-center'>
        <div className="w-full md:max-w-[80%]  p-4 rounded-md shadow sm:p-8">
        <h2 className="mb-3 text-2xl font-bold text-white text-center uppercase">Create your account</h2>

        <form action="" className="space-y-8 mb-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <label for="fullname" className="block text-md font-bold text-white">Full Name</label>
              <input type="text" name="fullname" id="fullname" placeholder="Tosmel Tungsten" className="w-full p-2 border rounded-3xl focus:outline-none pl-4 " />
            </div>

            <div className="space-y-2">
              <label for="email" className="block text-md font-bold text-white">Email address</label>
              <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full p-2 border rounded-3xl focus:outline-none pl-4 " />
            </div>

            <div className="space-y-2">
                <label for="password" className="text-md font-bold text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="*****" className="w-full p-2 border rounded-3xl focus:outline-none pl-4" />
            </div>

            <div className="space-y-2">
              <label for="wallet" className="block text-md font-bold text-white">Wallet address for cryptocurrency</label>
              <input type="text" name="wallet" id="wallet" placeholder="ex. 0x4833d6919fEC09c424................" className="w-full p-2 border rounded-3xl focus:outline-none pl-4" />
            </div>

            <div className="space-y-2">
              <label for="email" className="block text-md font-bold text-white">Country of Residence</label>
              <input type="text" name="country" id="country" placeholder="ex. Nigeria" className="w-full p-2 border rounded-3xl focus:outline-none pl-4 " />
            </div>

            <div className="space-y-2">
              <label for="number" className="block text-md font-bold text-white">Phone number</label>
              <input type="number" name="pnumber" id="pnumber" placeholder="ex. 2348068957966" className="w-full p-2 border rounded-3xl focus:outline-none pl-4 " />
            </div>

          <div>
            <p className='text-white'>By creating an account you accept the {''}
              <a href="/" rel="noopener noreferrer" className='text-white font-bold underline'>Terms of Services and Privacy Policy</a>
            </p>
          </div>
            
          </div>
          <Button type='submit' className='w-full px-8 py-2 font-semibold rounded-3xl text-white bg-gradient-to-r from-[#84399F] to-[#7B57E1]'>Proceed</Button>

          <Button type='submit' className='w-full px-8 py-2 font-semibold rounded-3xl text-white bg-gradient-to-r from-[#84399F] to-[#7B57E1]'>Proceed</Button>

          <Button type='submit' className='w-full px-8 py-2 font-semibold rounded-3xl text-white bg-gradient-to-r from-[#84399F] to-[#7B57E1]'>Proceed</Button>

          <Button type='submit' className='w-full px-8 py-2 font-semibold rounded-3xl text-white bg-gradient-to-r from-[#84399F] to-[#7B57E1]'>Create account</Button>
          {/* <button type="submit" className="w-full px-8 py-2 font-semibold rounded-3xl bg-sky-500 text-white">Sign up</button> */}
        </form>
      
      </div>
    </div>
      
    </main>
    </>
  )
}

export default SignUp