import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Feed from './components/Feed'
import { Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        {/* <Routes> */}
        <Navbar />
        <Filter/>
        <Feed/>
        <Feed/>
        <Feed/>
        {/* </Routes> */}
      </div>
    </>
  )
}

export default App
