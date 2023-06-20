import React, { useState} from 'react';
import fLogo from '../assets/images/footer-logo.png';
import Image from 'next/image';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class="sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:pt-5">
      <div class="relative flex items-center justify-between px-3">
        <a
          href="/"
          class="inline-flex items-center"
        >
          <Image
            src={fLogo}
            className='h-15 w-30'
          />
        </a>
        <ul class="md:flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              class="font-medium tracking-wide text-white transition-colors duration-200 "
            >
              DISCOVER
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Features"
              class="font-medium tracking-wide text-white transition-colors duration-200"
            >
              FEATURES
            </a>
          </li>
          <li>
            <a
              href="/campaigns"
              class="font-medium tracking-wide text-white transition-colors duration-200"
            >
              VIEW CAMPAIGN
            </a>
          </li>
          <li>
            <a
              href="/"
              class="font-medium tracking-wide text-white transition-colors duration-200"
            >
              ABOUT US
            </a>
          </li>
        </ul>

        <ul class="md:flex items-center hidden space-x-3 lg:flex">
          <li>
            <a
              href="/"
              class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-3xl shadow-md bg-pink-600 focus:shadow-outline focus:outline-none"
            >
              Connect Wallet
            </a>
          </li>
        </ul>

        <ul class="md:flex items-center hidden space-x-4 lg:flex">
          <li>
            <a
              href="/signin"
              class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-3xl shadow-md bg-purple-600 focus:shadow-outline focus:outline-none"
              aria-label="Sign in"
              title="Sign in"
            >
              Signin/Signup
            </a>
          </li>
        </ul>

        <div class="lg:hidden px-4">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50 focus:bg-purple-50 font-bold"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-purple-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div class="absolute top-0 left-0 w-full">
              <div class="p-5 bg-[#110A27] border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      class="inline-flex items-center"
                    >
                     <Image
                      src={fLogo}
                      className='h-15 w-30'
                    />
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline font-bold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-purple-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav className='text-center'>
                  <ul class="space-y-4">
                  <li>
                      <a
                        href="/"
                        class="font-medium tracking-wide text-white transition-colors duration-200 "
                      >
                        DISCOVER
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Features"
                        class="font-medium tracking-wide text-white transition-colors duration-200"
                      >
                        FEATURES
                      </a>
                    </li>
                    <li>
                      <a
                        href="/campaigns"
                        class="font-medium tracking-wide text-white transition-colors duration-200"
                      >
                        VIEW CAMPAIGN
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="font-medium tracking-wide text-white transition-colors duration-200"
                      >
                        ABOUT US
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-3xl shadow-md bg-pink-600 focus:shadow-outline focus:outline-none"
                      >
                        Connect Wallet
                      </a>
                    </li>

                    <li>
                      <a
                        href="/signin"
                        class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-3xl shadow-md bg-purple-600 focus:shadow-outline focus:outline-none"
                        aria-label="Sign in"
                        title="Sign in">
                        Signin/Signup
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Nav