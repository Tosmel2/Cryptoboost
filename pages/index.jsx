import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-full w-full bg-slate-600'>
      <section className='why-cryptoboost w-[90%] mx-auto md:pt-8 md:pb-4'>
        <div className='text-center text-white py-8 px-0'>
        <h1 className='text-2xl md:text-4xl font-bold'>Why CryptoBoost?</h1>
        </div>

        <div className='md:flex md:justify-between w-full'>
        <div className='w-full md:w-[40%]'>
        <button type="button" className="mb-1 p-2 font-semibold rounded-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white">Why CryptoBoost?</button>
          <p className='md:text-justify text-lg text-white md:my-0 my-2'>
            We Boost Startups with Decentralized Crowdfunding on the Blockchain Network. We make your tech startup dreams become a reality. Take action now to shape the future and make it a reality.
          </p>
        </div>
        <div className=' w-full md:w-[55%] mt-10 text-white'>
          <div className='flex justify-between mb-3'>
            <h3 className='font-bold text-lg w-[45%]'>Premium security for you</h3>
            <p className='w-[55%]'>We host data on distributed network and without the need of traditiona financial intermediaries.</p>
          </div>
          <div className='flex justify-between mb-3'>
            <h3 className='font-bold text-lg w-[45%]'>Fund cutting-end</h3>
            <p className='w-[55%]'>We give you the chance to showcase your tech startup projects publicly to enable you meet your goals.</p>
          </div>
          <div className='flex justify-between mb-3'>
            <h3 className='font-bold text-lg w-[45%]'>Fund and launch your start-up</h3>
            <p className='w-[55%]'>We help tech startups to get funds that enable them to launch projects.</p>
          </div>
        </div>
        </div>
      </section>

      <section className='funding-projects md:py-8  w-[90%] mx-auto'>
        <div className='text-center text-white py-10 px-3 md:px-0'>
        <h1 className='text-2xl md:text-4xl font-bold'>Funded Projects</h1>
        <p className='text-md md:texy-lg '>Succesful projects that have been funded through the platform</p>
        </div>
        <div className='projects-container md:flex md:justify-between md:items-center w-full md:flex-wrap'>

          <div className='project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-md md:texy-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

        </div>
      </section>

      <section className='testimonial w-[90%]  mx-auto'>
        <div className='testimonial-header text-center text-white py-8 px-0'>
          <h1 className='text-2xl md:text-4xl font-bold'>Testimonials</h1>
          <p className='text-lg '>Hear from the horses mouth and be inspired</p>
        </div>

        <div className='md:flex md:justify-between md:items-center md:h-[40vh]'>
          <div className='md:w-[32%] p-4 leading-6 bg-gradient-to-r from-cyan-500 to-blue-500 mb-5 rounded-xl w-full border border-solid border-white'>
            <div className='h-[20%] flex justify-between items-center'>
              <p className='text-lg text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </p>
            </div>
            <div className='h-[80%] w-full md:text-start md:mt-4'>
              <h1 className='text-xl font-bold text-center md:text-start text-white'>Just the support I needed</h1>
              <p className='text-medium text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='md:w-[32%] p-4 leading-6 bg-gradient-to-r from-cyan-500 to-blue-500 mb-5 rounded-xl w-full border border-solid border-white'>
            <div className='h-[20%] flex justify-between items-center'>
              <p className='text-lg text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </p>
            </div>
            <div className='h-[80%] w-full md:text-start md:mt-4'>
              <h1 className='text-xl font-bold text-center md:text-start text-white'>Just the support I needed</h1>
              <p className='text-medium text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='md:w-[32%] p-4 leading-6 bg-gradient-to-r from-cyan-500 to-blue-500 mb-5 rounded-xl w-full border border-solid border-white'>
            <div className='h-[20%] flex justify-between items-center'>
              <p className='text-lg text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </p>
            </div>
            <div className='h-[80%] w-full md:text-start md:mt-4'>
              <h1 className='text-xl font-bold text-center md:text-start text-white'>Just the support I needed</h1>
              <p className='text-medium text-center md:text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

        </div>
      </section>

      <section className='ongoing-projects w-[90%] mx-auto md:py-10'>
        <div className='text-center text-white py-8 px-0'>
        <h1 className='text-2xl md:text-4xl font-bold'>Ongoing Projects</h1>
        <p className='text-md md:texy-lg '>Lists of ongoing projects to invest in.</p>
        </div>
        <div className='ong-projects-container md:flex md:justify-between md:items-center w-full md:flex-wrap'>

          <div className='ong-project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='ong-project-card-image rounded-xl md:rounded-b-none -xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='ong-project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='ong-project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='ong-project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='ong-project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='ong-project-card md:w-[32%] mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl md:rounded-b-none h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content rounded-b-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />

    </main>
  )
}
