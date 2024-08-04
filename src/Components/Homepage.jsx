import React from 'react'
import "../StyleFiles/HomePage.css"
import SideBar from "../Components/SideBar"
import ChatSection from "../Components/ChatSection"

const Homepage = () => {
  return (
    <div className='Home_container'>
      <SideBar />
      <ChatSection />
    </div>
  )
}

export default Homepage