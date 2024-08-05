import React, { useContext, useState } from 'react'
import "../StyleFiles/SideBar.css"
import NavBar from "../Components/NavBar"
import imgs from "../Images/user.png"
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
const SideBar = () => {

  const { findUser, username,signoutbtn } = useContext(UserContext);

  const [name, setName] = useState("");

  return (

    <>
      <div className='Sidebar_Container'>
        <NavBar />

        <div className='Searchbox_container'>

          <div className="searchbox">
            <input type="text" name="" id="" placeholder='Find new user' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => findUser(name)} >Search</button>
          </div>

          {username && <div className="useradd">
            <img src={imgs} alt="" />
            <span>{username.name}</span>
            <button >ADD</button>

          </div>}
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
          <button onClick={signoutbtn}><Link to="/">Logout</Link></button>
        </div>



      </div>


    </>
  )
}

export default SideBar