import React, { useContext, useEffect, useRef, useState } from 'react'
import "../StyleFiles/ChatSection.css"
import imgs from "../Images/user.png"
import { FaVideo } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { setDoc, collection, doc, addDoc, orderBy, onSnapshot, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../Firebase'
import { UserContext } from '../Context/UserContext';
import { AuthContext } from '../Context/AuthContext'
import { IoMdChatbubbles } from "react-icons/io";



const ChatSection = () => {

  const [message, setMessage] = useState("");

  const { textdata, id, chatname } = useContext(UserContext);

  const { currentUser } = useContext(AuthContext);



  const scrollbarref = useRef();

  const scrollToBottom = () => {
    scrollbarref.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom();

  })
  // console.log(user);

  const sendMessagebtn = async (e) => {

    const combineID = id;

    if (id && message) {
      await setDoc(doc(db, "chatlist", combineID), {
        name: currentUser.displayName,
        text: message,
        email: currentUser.email,
        id: currentUser.uid,
        photoURL: currentUser.photoURL,
        time: serverTimestamp(),
      },);

      const val = doc(db, "chatlist", combineID);

      const collectionval = collection(val, "Message");

      addDoc(collectionval, {
        name: currentUser.displayName,
        text: message,
        email: currentUser.email,
        id: currentUser.uid,
        photoURL: currentUser.photoURL,
        createdAt: serverTimestamp(),
      })

      setMessage("");

    } else {
      alert("Type a Message..");
    }

  }

  // console.log(textdata);

  // console.log(combineID);

  return (
    <div className='chatsection_conatiner'>
      {id ?
        <>
          <div className="chatnavbar">
            <div className="imgs">
              <img src={imgs} alt="" />
            </div>
            <div className="userinfo">
              <h4>{chatname} </h4>
            </div>

            <div className="icons">
              <FaVideo className='icon1' />
              <IoMdCall className='icon1' />
              <IoMdMore className='icon1' />
            </div>
          </div>

          <div className="messageslist">

            {textdata.map((data) => {
              return (

                <>
                  <div className={data.name === currentUser.displayName ? "chats active" : "chats"} key={data.id}>
                    <div className="userimg">
                      <img src={imgs} alt="" />
                    </div>
                    <div className="massage">
                      <p>{data.text}</p>
                    </div>
                  </div>
                </>
              )

            })}
            <div ref={scrollbarref}></div>
          </div>

          <div className="sendmessgaebox">
            <input type="text" placeholder='Type your Message..' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessagebtn}>Send</button>
          </div>

        </>

        :
        <div className='opening_msg'>

          <div className="icon">
            <IoMdChatbubbles className='penicon' />

          </div>

          <h3>Welcome to Messanger. Let Start Chatting</h3>



        </div>

      }
    </div>
  )
}

export default ChatSection