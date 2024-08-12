import React from 'react'
import "../StyleFiles/HomePage.css"
import SideBar from "../Components/SideBar"
import ChatSection from "../Components/ChatSection"

const Homepage = () => {
  return (
    <>
      <div className='Home_Messgaesbox'>
        <h3>This App is not available for Mobile Version.</h3>
        <h3>We are currently working on it.</h3>
        <h3> Please Switch to Desktop View till then</h3>
      </div>
      <div className='Home_container'>
        <SideBar />
        <ChatSection />
      </div>

    </>

  )
}

export default Homepage