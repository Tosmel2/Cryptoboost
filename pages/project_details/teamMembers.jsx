import React from 'react'
import solanaImg from '../../assets/images/solana.png';
import Image from 'next/image';
import Footer from '@/components/Footer'

const TeamMembers = () => {
  return (
    <>
      <main className='h-full w-full bg-[#F5F5F5]'>
      {/* <section className='w-[90%] md:w-[85%] mx-auto py-20'>
        <div className='md:flex md:justify-center bg-[#DEF1E9] h-[30vh] rounded-md mb-8'>
          <div className='w-full md:w-[40%] rounded-md'>
          <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-md'
            quality={100}
            />
          </div>
          <div className='w-full md:w-[60%] py-4 px-6'>
              <h2 className='font-bold text-lg'>
                Tosin Adewale
              </h2>
              <h3 className='text-sm mb-2'>
                Software Engineer
              </h3>
              <p className='text-[#842ea3]'>
                Description
              </p>
              <p>
              Tosin Adewale, the software developer at RoboWorks, is a computer science graduate from Stanford University. He has extensive experience in software development, having previously worked at Google and Amazon. He specializes in developing algorithms and control systems for robotics applications.
            </p>
          </div>
        </div>

        <div className='md:flex md:justify-center bg-[#DEF1E9] h-[30vh] rounded-md mb-8'>
          <div className='w-full md:w-[40%] rounded-md'>
          <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-md'
            quality={100}
            />
          </div>
          <div className='w-full md:w-[60%] py-4 px-6'>
              <h2 className='font-bold text-lg'>
                Tosin Adewale
              </h2>
              <h3 className='text-sm mb-2'>
                Software Engineer
              </h3>
              <p className='text-[#842ea3]'>
                Description
              </p>
              <p>
              Tosin Adewale, the software developer at RoboWorks, is a computer science graduate from Stanford University. He has extensive experience in software development, having previously worked at Google and Amazon. He specializes in developing algorithms and control systems for robotics applications.
            </p>
          </div>
        </div>

        <div className='md:flex md:justify-center bg-[#DEF1E9] h-[30vh] rounded-md mb-8'>
          <div className='w-full md:w-[40%] rounded-md'>
          <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-md'
            quality={100}
            />
          </div>
          <div className='w-full md:w-[60%] py-4 px-6'>
              <h2 className='font-bold text-lg'>
                Tosin Adewale
              </h2>
              <h3 className='text-sm mb-2'>
                Software Engineer
              </h3>
              <p className='text-[#842ea3]'>
                Description
              </p>
              <p>
              Tosin Adewale, the software developer at RoboWorks, is a computer science graduate from Stanford University. He has extensive experience in software development, having previously worked at Google and Amazon. He specializes in developing algorithms and control systems for robotics applications.
            </p>
          </div>
        </div>

        <div className='md:flex md:justify-center bg-[#DEF1E9] h-[30vh] rounded-md mb-8'>
          <div className='w-full md:w-[40%] rounded-md'>
          <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-md'
            quality={100}
            />
          </div>
          <div className='w-full md:w-[60%] py-4 px-6'>
              <h2 className='font-bold text-lg'>
                Tosin Adewale
              </h2>
              <h3 className='text-sm mb-2'>
                Software Engineer
              </h3>
              <p className='text-[#842ea3]'>
                Description
              </p>
              <p>
              Tosin Adewale, the software developer at RoboWorks, is a computer science graduate from Stanford University. He has extensive experience in software development, having previously worked at Google and Amazon. He specializes in developing algorithms and control systems for robotics applications.
            </p>
          </div>
        </div>

        <div className='md:flex md:justify-center bg-[#DEF1E9] h-[30vh] rounded-md mb-8'>
          <div className='w-full md:w-[40%] rounded-md'>
          <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-md'
            quality={100}
            />
          </div>
          <div className='w-full md:w-[60%] py-4 px-6'>
              <h2 className='font-bold text-lg'>
                Tosin Adewale
              </h2>
              <h3 className='text-sm mb-2'>
                Software Engineer
              </h3>
              <p className='text-[#842ea3]'>
                Description
              </p>
              <p>
              Tosin Adewale, the software developer at RoboWorks, is a computer science graduate from Stanford University. He has extensive experience in software development, having previously worked at Google and Amazon. He specializes in developing algorithms and control systems for robotics applications.
            </p>
          </div>
        </div>

        <div className='md:flex md:justify-center bg-[#DEF1E9] h-[30vh] rounded-md mb-8'>
          <div className='w-full md:w-[40%] rounded-md'>
          <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-md'
            quality={100}
            />
          </div>
          <div className='w-full md:w-[60%] py-4 px-6'>
              <h2 className='font-bold text-lg'>
                Tosin Adewale
              </h2>
              <h3 className='text-sm mb-2'>
                Software Engineer
              </h3>
              <p className='text-[#842ea3]'>
                Description
              </p>
              <p>
              Tosin Adewale, the software developer at RoboWorks, is a computer science graduate from Stanford University. He has extensive experience in software development, having previously worked at Google and Amazon. He specializes in developing algorithms and control systems for robotics applications.
            </p>
          </div>
        </div>

      </section> */}

      <section  className='flex justify-between w-[90%] mx-auto p-10'>
        <div className='w-full md:w-[30%] h-[40vh] rounded-lg'>
          <Image
            src={solanaImg}
            className='object-cover h-full w-full object-center rounded-md'
            quality={100}
            />
          </div>
        <div className='w-[65%]'>
          <h2 className='inter-font text-2xl font-bold mb-4'>
            As a tech start-up, Cryptoboost can offer various rewards and 
            incentives to its investors. Here are a few options:
          </h2>
          <ul className='mono'>
            <li>
              Equity: One of the most common incentives for investors is equity in the company. By offering equity, investors become part owners of the company and can share in its success through dividends and capital gains.
            </li>
            <li>
              Early Access to Products: Investors can be given early access to RoboWorks' products before they are available to the general public. This can be a valuable incentive, especially for investors who are interested in using the products themselves or have connections in industries where the products could be useful.
            </li>
            <li>
              Discounts on Products or Services: Investors can be given discounts on RoboWorks' products or services as a way of showing appreciation for their support. This can also help incentivize them to continue investing in the company.
            </li>
            <li>
              Exclusive Events or Access: Investors can be given exclusive access to events or opportunities related to RoboWorks. This could include things like VIP tours of the company's facilities or invitations to exclusive industry events where they can network and learn more about the latest trends and developments.
            </li>
            <li>
              Recognition and Branding: Investors can be recognized and given branding opportunities to show their support for RoboWorks. This could include things like having their names listed on the company website or being featured in marketing materials.Ultimately, the rewards and incentives offered to investors will depend on the goals and needs of the company, as well as the interests and priorities of the investors themselves. It's important to find a balance that is mutually beneficial and helps build a strong relationship between the company and its investors.
            </li>
          </ul>
        </div>
      </section>
      <Footer />
      </main>
    </>
  )
}

export default TeamMembers


        {/* <TeamMembersCard /> */}
// export const TeamMembersCard = () => {
//   return (
//     <div>
//       <div className='md:flex md:justify-center bg-[#DEF1E9] h-[30vh] rounded-md mb-8'>
//           <div className='w-full md:w-[40%] rounded-md'>
//           <Image
//             src={solanaImg}
//             className='object-cover h-full w-full object-center rounded-md'
//             quality={100}
//             />
//           </div>
//           <div className='w-full md:w-[60%] p-4'>
//               <h2 className='font-bold text-lg'>
//                 Tosin Adewale
//               </h2>
//               <h3>
//                 Software Engineer
//               </h3>
//               <p className='text-[#842ea3]'>
//                 Description
//               </p>
//               <p>
//               Tosin Adewale, the software developer at RoboWorks, is a computer science graduate from Stanford University. He has extensive experience in software development, having previously worked at Google and Amazon. He specializes in developing algorithms and control systems for robotics applications.
//             </p>
//           </div>
//         </div>
//     </div>
//   )
// }

