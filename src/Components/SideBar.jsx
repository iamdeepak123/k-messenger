import React, { useContext, useEffect, useState } from 'react'
import "../StyleFiles/SideBar.css"
import NavBar from "../Components/NavBar"
import imgs from "../Images/user.png"
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, where } from 'firebase/firestore'
import { db } from '../Firebase'
import { AuthContext } from '../Context/AuthContext'


const SideBar = () => {

  const { signoutbtn, FindUser, user, setUser ,addchatlist} = useContext(UserContext);
  const { currentUser } = useContext(AuthContext);


  const [name, setName] = useState("");
  const [friend, setFriend] = useState([]);
  const [textdata, setTextData] = useState([]);


 


  const addfriendlist = async () => {

    const val = doc(db, "Friendlist", currentUser.uid);
    const subcollectionRef1 = doc(val, "Mainlist", user.id);

    await setDoc(subcollectionRef1, {
      name: user.name,
      email: user.email,
      id: user.id,
      photoURL: user.photoURL,
    });

  }

 

  useEffect(() => {

    const getfriendlist = async () => {

      const val = doc(db, "Friendlist", currentUser.uid);
      const subcollectionRef1 = collection(val, "Mainlist");
  
      const Query = query(subcollectionRef1);
  
      const Unsub = onSnapshot(Query, (snap) => {
        let mess = [];
        snap.forEach((doc) => {
          mess.push({ ...doc.data(), id: doc.id });
        });
        setFriend(mess);
      }); 
  
    }


    getfriendlist();

   
  },[currentUser.uid, user])




  console.log(friend);

  return (

    <>
      <div className='Sidebar_Container'>
        <NavBar />

        <div className='Searchbox_container'>

          <div className="searchbox">
            <input type="text" name="" id="" placeholder='Find new user' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => FindUser(name, setName)} >Search</button>
          </div>

          {user && <div className="useradd">
            <img src={imgs} alt="" />
            <span>{user.name}</span>
            <button onClick={addfriendlist}>ADD</button>

          </div>}
        </div>

        <div className="userlist">

          {friend.map((data) => {
            return (

              <div className="user" onClick={() => addchatlist(data.id, data.name)} key={data.id}>
                <div className="imgss">
                  <img src={imgs} alt="" />
                </div>
                <span>{data.name}</span>
              </div>
            )
          })
          }

        </div>

        <div className="logout">
          <button onClick={signoutbtn}><Link to="/">Logout</Link></button>
        </div>

      </div>


    </>
  )
}

export default SideBar