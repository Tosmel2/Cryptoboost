<div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Category
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  World
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Games
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  References
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Business
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Web
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  eCommerce
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Entertainment
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Apples</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Brochure
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Nonprofit
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Educational
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Cherry</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Infopreneur
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Personal
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Wiki
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Forum
                </a>
              </li>
            </ul>
          </div>
        </div>


      <section>
      <div className="flex justify-center">
      <div
        className={`w-64 p-4 bg-gray-200 m-4 transition-all transform hover:-translate-x-8 ${
          activeCard === 1 ? 'flex-grow' : ''
        }`}
        onClick={() => handleCardClick(1)}
      >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, minus?</p>
        {/* Card 1 content goes here */}
      </div>
      <div
        className={`w-64 p-4 bg-gray-200 m-4 transition-all transform hover:-translate-x-8 ${
          activeCard === 2 ? 'flex-grow' : ''
        }`}
        onClick={() => handleCardClick(2)}
      >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, minus?</p>
        {/* Card 2 content goes here */}
      </div>
      <div
        className={`w-64 p-4 bg-gray-200 m-4 transition-all transform hover:-translate-x-8 ${
          activeCard === 3 ? 'flex-grow' : ''
        }`}
        onClick={() => handleCardClick(3)}
      >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, minus?</p>
        {/* Card 3 content goes here */}
      </div>
      <div
        className={`w-64 p-4 bg-gray-200 m-4 transition-all transform hover:-translate-x-8 ${
          activeCard === 4 ? 'flex-grow' : ''
        }`}
        onClick={() => handleCardClick(4)}
      >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, minus?</p>
        {/* Card 4 content goes here */}
      </div>
    </div>
      </section>


      <div>Fundraising for startups is a long and tedious process. We are here to change that. We are a decentralized crowdfunding platform that allows investors to invest in tech startups with ease. We are here to change that. We are a decentralized crowdfunding platform that allows investors to invest in tech startups with ease.
      </div>


      =======================================================================

      <section className='funding-projects md:py-10 py-10 w-[85%] mx-auto'>
        <div className='projects-container md:flex md:justify-between md:items-center w-full md:flex-wrap'>

          <div className='project-card md:w-[48%] mb-4 w-full h-[60vh]'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content  p-3 text-white border h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='project-card md:w-[48%] mb-4 w-full h-[60vh]'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content  p-3 text-white border h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='project-card md:w-[48%] mb-4 w-full h-[60vh]'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content  p-3 text-white border h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='project-card md:w-[48%] mb-4 w-full h-[60vh]'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content  p-3 text-white border h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='project-card md:w-[48%] mb-4 w-full h-[60vh]'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content  p-3 text-white border h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

          <div className='project-card md:w-[48%] mb-4 w-full h-[60vh]'>
            <div className='project-card-image rounded-xl h-2/5 w-full bg-slate-800'>
              {/* <Image src='./assets/images/solana.png' className='w-full h-full object-cover rounded-br-md rounded-bl-md' /> */}
            </div>
            <div className='project-card-content  p-3 text-white border h-3/5 w-full'>
              <h1 className='text-2xl font-bold'>Project Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>

        </div>
      </section>

      <Footer bgColor = 'bg-cyan-9500' topBorder='border-t' />