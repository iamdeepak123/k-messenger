import React from 'react'
import "../StyleFiles/SideBar.css"
import NavBar from "../Components/NavBar"
import imgs from "../Images/user.png"
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (

    <>
      <div className='Sidebar_Container'>
        <NavBar />

        <div className='Searchbox_container'>

          <div className="searchbox">
            <input type="text" name="" id="" placeholder='Find new user' />
            <button>Search</button>
          </div>

          <div className="useradd">
            <img src={imgs} alt="" />
            <span>Jone</span>
            <button>ADD</button>

          </div>
        </div>

        <div className="userlist">
          <div className="user">
            <div className="imgss">
              <img src={imgs} alt="" />
            </div>
            <span>Jone</span>

          </div>
          <div className="user">
            <div className="imgss">
              <img src={imgs} alt="" />
            </div>
            <span>Jone</span>

          </div>
          <div className="user">
            <div className="imgss">
              <img src={imgs} alt="" />
            </div>
            <span>Jone</span>

          </div>
          <div className="user">
            <div className="imgss">
              <img src={imgs} alt="" />
            </div>
            <span>Jone</span>

          </div>
          <div className="user">
            <div className="imgss">
              <img src={imgs} alt="" />
            </div>
            <span>Jone</span>

          </div>
          <div className="user">
            <div className="imgss">
              <img src={imgs} alt="" />
            </div>
            <span>Jone</span>

          </div>
          <div className="user">
            <div className="imgss">
              <img src={imgs} alt="" />
            </div>
            <span>Jone</span>

          </div>


        </div>

        <div className="logout">
          <button><Link to="/">Logout</Link></button>
        </div>



      </div>


    </>
  )
}

export default SideBar