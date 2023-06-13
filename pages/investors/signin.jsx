import React from 'react'

// const SignIn = () => {
//   return (
//     <>
//     <main className='h-screen bg-cyan-800 flex flex-col justify-center items-center'>
//       <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8">
//       <h2 className="mb-3 text-2xl font-bold text-white text-center uppercase">Sign In to your account</h2>
//       <p className="text-sm text-center text-white mb-8">Dont have account?
//         <a href="#" rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</a>
//       </p>

//       <form novalidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid mb-12">
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <label for="email" className="block text-md font-bold text-white">Email address</label>
//             <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-4 border rounded-md focus:outline-none" />
//           </div>
//           <div className="space-y-2">
//             <div className="flex justify-between">
//               <label for="password" className="text-md font-bold text-white">Password</label>
//               <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-white">Forgot password?</a>
//             </div>
//             <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-4 border rounded-md focus:outline-none" />
//           </div>
//         </div>
//         <button type="submit" className="w-full px-8 py-4 font-semibold rounded-md bg-sky-500 text-white">Sign in</button>
//       </form>

//       <div className="flex items-center w-full my-4">
//         <hr className="w-full text-white font-extrabold" />
//         <p className="px-3 text-white font-bold">OR</p>
//         <hr className="w-full ext-white font-bold" />
//       </div>
      
//       <div className="my-6 space-y-4">
//         <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 bg-sky-500 text-white focus:ring-white-400">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
//             <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
//           </svg>
//           <p>Continue with Google</p>
//         </button>
//         <button aria-label="continue with facebook" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 bg-sky-500 text-white focus:ring-white-400">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
//                 <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
//               </svg>
//           <p>Continue with Facebook</p>
//         </button>
//         <button aria-label="Login with Twitter" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 bordbg-sky-500 focus:ring-white-400 bg-sky-500 text-white">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
//             <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
//           </svg>
//           <p>Continue with Twitter</p>
//         </button>
//       </div>
     
//     </div>
//     </main>
//     </>
//   )
// }

// export default SignIn



const SignIn = () => {
  return (
    <>
    <main className='h-full flex justify-between'>
    <div className='hidden md:block p-16 md:w-[50%] bg-cyan-400'>
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
        <h2 className="mb-3 text-2xl font-bold text-white text-center uppercase">Sign In to your account</h2>
        <p className="text-sm text-center text-white mb-8">Dont have account? {''}
          <a href="#" rel="noopener noreferrer" className="focus:underline hover:underline">Sign up here</a>
        </p>

        <form action="" className="space-y-8 mb-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <label for="email" className="block text-md font-bold text-white">Email address</label>
              <input type="email" name="email" id="email" placeholder="crypto@boost.com" className="w-full p-2 border rounded-3xl focus:outline-none pl-4 " />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label for="password" className="text-md font-bold text-white">Password</label>
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-white">Forgot password?</a>
              </div>
              <input type="password" name="password" id="password" placeholder="*****" className="w-full p-2 mb-3 border rounded-3xl focus:outline-none pl-4" />
            </div>

            <div className='pt-5'>
            <button type="button" className="w-full px-8 py-2 font-semibold rounded-3xl bg-sky-500 text-white">Sign in</button>
            </div>
            


          <div>
            <p className='text-white'>By creating an account you accept the {''}
              <a href="/" rel="noopener noreferrer" className='text-white font-bold underline'>Terms of Services and Privacy Policy</a>
            </p>
          </div>
            
          </div>
        </form>

        <div className="flex items-center w-full my-4">
        <hr className="w-full text-white font-extrabold" />
        <p className="px-3 text-white font-bold">OR</p>
        <hr className="w-full ext-white font-bold" />
      </div>
      
      <div className="my-6 space-y-4">
        <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-2 space-x-4 border rounded-3xl focus:ring-2 focus:ring-offset-1 bg-sky-500 text-white focus:ring-white-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Continue with Google</p>
        </button>
        <button aria-label="continue with facebook" role="button" className="flex items-center justify-center w-full p-2 space-x-4 border rounded-3xl focus:ring-2 focus:ring-offset-1 bg-sky-500 text-white focus:ring-white-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
              </svg>
          <p>Continue with Facebook</p>
        </button>
        <button aria-label="Login with Twitter" role="button" className="flex items-center justify-center w-full p-2 space-x-4 border rounded-3xl focus:ring-2 focus:ring-offset-1 focus:ring-white-400 bg-sky-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
            <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
          </svg>
          <p>Continue with Twitter</p>
        </button>
      </div>
      
      </div>
    </div>
      
    </main>
    </>
  )
}

export default SignIn