import React from 'react'

const Donate = () => {
  return (
    <>
      <main className='bg-[#120b29]'>
      <section className='contactus py-10 md:w-[80%] px-3 mx-auto md:flex md:justify-center'>
        <div className='bg-white rounded-xl p-2 md:p-6 md:w-1/2'>
        <form action="" className="space-y-4">
          <div className='font-bold text-purple-700 text-2xl border-b-2 mb-3 pb-2'>Donate: Bromuno</div>
          <div className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="number" className="block text-sm font-bold text-purple-600">Currency</label>
              <input type="number" name="number" placeholder="Select crypto" className="bg-purple-50 w-full p-2 border rounded-3xl focus:outline-none pl-4 " />
            </div>

            <div className="space-y-1">
              <label htmlFor="number" className="block text-sm font-bold text-purple-600">Amount <span className='text-gray-400'>(optional)</span> </label>
              <input type="number" name="number" id="number" placeholder="Enter amount" className="bg-purple-50 w-full p-2 border rounded-3xl focus:outline-none pl-4 " />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="block text-sm font-bold text-purple-600">Remark</label>
              <textarea type="text" name="message" rows={10} cols={20} placeholder="Tell us what you feel about the project" className="bg-purple-50 w-full p-2 border rounded-lg focus:outline-none pl-4 resize-none " />
            </div>

            <div className='pt-2'>
            <button type="button" className="md:w-[60%] w-full px-8 py-2 font-semibold rounded-3xl bg-purple-700 text-white">Send message</button>
            </div>
            
          </div>
        </form>
        </div>

        </section>
      </main>
    </>
  )
}

export default Donate

