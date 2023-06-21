import SignupModal from '@/components/SignupModal'
import FundedProjects from '@/components/FundedProjects'
import Nav from '@/components/Nav'
import React from 'react'

const testing = () => {
  return (
    <div>
      <div className='bg-black'>
        <Nav />
      </div>

      <SignupModal />
      <FundedProjects />
    </div>
  )
}

export default testing