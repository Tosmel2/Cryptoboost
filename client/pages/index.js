import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-full w-full bg-slate-800'>
      <section className='w-[90%] mx-auto'>
        <div className='text-start text-white p-10'>
        <h1 className='text-4xl font-bold'>Funded Projects</h1>
        <p className='text-lg '>Succesful projects that have been funded through the platform</p>
        </div>
        <div className='projects-container'>

          <div className='project-card mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content bg-violet-600 px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='project-card mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content bg-violet-600 px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='project-card mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content bg-violet-600 px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='project-card mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content bg-violet-600 px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='project-card mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content bg-violet-600 px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='project-card mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content bg-violet-600 px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

        </div>
      </section>

      <section className='w-[90%] mx-auto'>
        <div className='testimonial-header text-center text-white py-8 px-0'>
          <h1 className='text-4xl font-bold'>Testimonials</h1>
          <p className='text-lg '>Hear from the horses mouth and be inspired</p>
        </div>

        <div className='h-[35vh] bg-violet-600 mb-5 rounded-xl w-full border border-solid border-white'>
          <div className='h-[20%] flex justify-between items-center'>
            <p className='text-lg text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
          </div>
            <div className='h-[80%] w-full md:w-1/2'>
              <h1 className='text-2xl font-bold text-center text-white'>Just the support I needed</h1>
              <p className='text-lg text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
        </div>

        <div className='h-[35vh] bg-violet-600 mb-5 rounded-xl w-full border border-solid border-white'>
          <div className='h-[20%] flex justify-between items-center'>
            <p className='text-lg text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
          </div>
            <div className='h-[80%] w-full md:w-1/2'>
              <h1 className='text-2xl font-bold text-center text-white'>Just the support I needed</h1>
              <p className='text-lg text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
        </div>

        <div className='h-[35vh] bg-violet-600 mb-5 rounded-xl w-full border border-solid border-white'>
          <div className='h-[20%] flex justify-between items-center'>
            <p className='text-lg text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
          </div>
            <div className='h-[80%] w-full md:w-1/2'>
              <h1 className='text-2xl font-bold text-center text-white'>Just the support I needed</h1>
              <p className='text-lg text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
        </div>

      </section>

      <section className='w-[90%] mx-auto'>
        <div className='text-center text-white py-8 px-0'>
        <h1 className='text-4xl font-bold'>Ongoing Projects</h1>
        <p className='text-lg '>Lists of ongoing projects to invest in.</p>
        </div>
        <div className='ong-projects-container'>

          <div className='ong-project-card mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='ong-project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content bg-violet-600 px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='ong-project-card mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content bg-violet-600 px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='ong-project-card mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content bg-violet-600 px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='ong-project-card mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content bg-violet-600 px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='ong-project-card mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content bg-violet-600 px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='ong-project-card mb-5 rounded-xl w-full h-[50vh] border border-solid border-white'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='ong-project-card-content bg-violet-600 px-5 h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
