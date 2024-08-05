import React, { useContext, useState } from 'react'
import "../StyleFiles/SideBar.css"
import NavBar from "../Components/NavBar"
import imgs from "../Images/user.png"
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { db } from '../Firebase'
import { AuthContext } from '../Context/AuthContext'

const SideBar = () => {

  const { signoutbtn,findUser,user,setUser } = useContext(UserContext);
  const { currentUser } = useContext(AuthContext);

  
  const [name, setName] = useState("");


  const addchatlist = async () => {

    if (currentUser === "null") return alert("Please Login first");

    const combineID = user.id > currentUser.uid ? user.id + currentUser.uid : currentUser.uid + user.id;

    console.log(combineID);

    const res = await getDoc(doc(db, "chatlist", combineID));

    if (!res.exists()) {

        await setDoc(doc(db, "chatlist", combineID), { message: [] });
    }

    
}


  return (

    <>
      <div className='Sidebar_Container'>
        <NavBar />

        <div className='Searchbox_container'>

          <div className="searchbox">
            <input type="text" name="" id="" placeholder='Find new user' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => findUser(name, setName)} >Search</button>
          </div>

          {user && <div className="useradd" onClick={addchatlist}>
            <img src={imgs} alt="" />
            <span>{user.name}</span>


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