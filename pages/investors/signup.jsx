import React from 'react'

const SignUp = () => {
  return (
    <>
    <main className='h-full bg-teal-700 py-10 flex flex-col justify-center items-center'>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8">
      <h2 className="mb-3 text-2xl font-bold text-white text-center uppercase">Create your account</h2>

      <form novalidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid mb-12">
        <div className="space-y-4">
          <div className="space-y-2">
            <label for="email" className="block text-md font-bold text-white">Full Name</label>
            <input type="text" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-4 border rounded-md" />
          </div>

          <div className="space-y-2">
            <label for="email" className="block text-md font-bold text-white">Email address</label>
            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-4 border rounded-md" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label for="password" className="text-md font-bold text-white">Password</label>
            </div>
            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-4 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
          </div>

          <div className="space-y-2">
            <label for="email" className="block text-md font-bold text-white">Wallet address for cryptocurrency</label>
            <input type="text" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-4 border rounded-md" />
          </div>

          <div className="space-y-2">
            <label for="email" className="block text-md font-bold text-white">Country of Residence</label>
            <input type="text" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-4 border rounded-md" />
          </div>

          <div className="space-y-2">
            <label for="number" className="block text-md font-bold text-white">Phone number</label>
            <input type="number" name="pnumber" id="pnumber" placeholder="leroy@jenkins.com" className="w-full px-3 py-4 border rounded-md" />
          </div>

         <div>
          <p className='text-white'>By creating an account you accept the {''}
            <a href="/" rel="noopener noreferrer" className='text-white font-bold underline'>Terms of Services and Privacy Policy</a>
          </p>
         </div>
          
        </div>
        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-teal-400 text-white">Sign in</button>
      </form>
     
    </div>
    </main>
    </>
  )
}

export default SignUp