import React from 'react'

const SignUp = () => {
  return (
    <>
    <main className='h-full bg-teal-700 flex flex-col justify-center items-center'>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8">
      <h2 className="mb-3 text-2xl font-bold text-white text-center uppercase">Create your account</h2>
      <p className="text-sm text-center text-white mb-8">Dont have account?
        <a href="#" rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</a>
      </p>

      <form novalidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid mb-12">
        <div className="space-y-4">
          <div className="space-y-2">
            <label for="email" className="block text-md font-bold text-white">Email address</label>
            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-4 border rounded-md" />
          </div>

          <div className="space-y-2">
            <label for="email" className="block text-md font-bold text-white">Email address</label>
            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-4 border rounded-md" />
          </div>

          <div className="space-y-2">
            <label for="email" className="block text-md font-bold text-white">Email address</label>
            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-4 border rounded-md" />
          </div>

          <div className="space-y-2">
            <label for="email" className="block text-md font-bold text-white">Email address</label>
            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-4 border rounded-md" />
          </div>

          <div className="space-y-2">
            <label for="email" className="block text-md font-bold text-white">Email address</label>
            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-4 border rounded-md" />
          </div>

          <div className="space-y-2">
            <label for="email" className="block text-md font-bold text-white">Email address</label>
            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-4 border rounded-md" />
          </div>

          <div className="space-y-2">
            <label for="email" className="block text-md font-bold text-white">Email address</label>
            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-4 border rounded-md" />
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