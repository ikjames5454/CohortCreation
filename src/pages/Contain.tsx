import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import CreateCohort from './CreateCohort.tsx/CreateCohort'

const Contain = () => {
  return (
    <div className='contain h-[500px]'>
      <Sidebar/>
      <CreateCohort/>
    </div>
  )
}

export default Contain