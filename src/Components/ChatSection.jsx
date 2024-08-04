import React, { useEffect, useRef } from 'react'
import "../StyleFiles/ChatSection.css"
import imgs from "../Images/user.png"
import { FaVideo } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoMdMore } from "react-icons/io";

const ChatSection = () => {

  const scrollbarref = useRef();

  const scrollToBottom = () => {
    scrollbarref.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom();
  });

  return (
    <div className='chatsection_conatiner'>
      <div className="chatnavbar">
        <div className="imgs">
          <img src={imgs} alt="" />
        </div>
        <div className="userinfo">
          <h4>Rahul Singh </h4>
        </div>

        <div className="icons">
          <FaVideo className='icon1' />
          <IoMdCall className='icon1' />
          <IoMdMore className='icon1' />
        </div>
      </div>

      <div className="messageslist">

        <div className="chats">
          <div className="userimg">
            <img src={imgs} alt="" />
          </div>
          <div className="massage">
            <p>Lorem sit amet bhbviv  hhdfd  dfbdihfd hfgdfdij skfdjf ddd  h
              fbdfe dffjdbfdj</p>
          </div>
        </div>

        <div className="chats active">
          <div className="userimg">
            <img src={imgs} alt="" />
          </div>
          <div className="massage">
            <p>Lorem sit amet bhbviv  hhdfd  dfbdihfd hfgdfdij skfdjf ddd  h
              fbdfe dffjdbfdj</p>
          </div>
        </div>

        <div className="chats">
          <div className="userimg">
            <img src={imgs} alt="" />
          </div>
          <div className="massage">
            <p>Lorem sit amet bhbviv  hhdfd fdd d dfdi fda ffd idafhda ihdavfi fdahfifdafajfiayv8ycb ib udub bbdf dfjdfijdb fhdabfda n dfbdihfd hfgdfdij skfdjf ddd  h
              fbdfe dffjdbfdj</p>
          </div>
        </div>

        <div className="chats active">
          <div className="userimg">
            <img src={imgs} alt="" />
          </div>
          <div className="massage">
            <p>Lorem sit amet bhbviv  hhdfd  dfbdihfd hfgdfdij skfdjf ddd  h
              fbdfe dffjdbfdj</p>
          </div>
        </div>
        <div className="chats">
          <div className="userimg">
            <img src={imgs} alt="" />
          </div>
          <div className="massage">
            <p>Lorem sit amet bhbviv  hhdfd fdd d dfdi fda ffd idafhda ihdavfi fdahfifdafajfiayv8ycb ib udub bbdf dfjdfijdb fhdabfda n dfbdihfd hfgdfdij skfdjf ddd  h
              fbdfe dffjdbfdj</p>
             
          </div>
        </div>

        <div className="chats active">
          <div className="userimg">
            <img src={imgs} alt="" />
          </div>
          <div className="massage">
            <p>Lorem sit amet bhbviv  hhdfd  dfbdihfd hfgdfdij skfdjf ddd  h
              fbdfe dffjdbfdj</p>
          </div>
        </div>
        <div className="chats">
          <div className="userimg">
            <img src={imgs} alt="" />
          </div>
          <div className="massage">
            <p>Lorem sit amet bhbviv  hhdfd fdd d dfdi fda ffd idafhda ihdavfi fdahfifdafajfiayv8ycb ib udub bbdf dfjdfijdb fhdabfda n dfbdihfd hfgdfdij skfdjf ddd  h
              fbdfe dffjdbfdj</p>
          </div>
        </div>

        <div className="chats active">
          <div className="userimg">
            <img src={imgs} alt="" />
          </div>
          <div className="massage">
            <p>Lorem sit amet bhbviv  hhdfd  dfbdihfd hfgdfdij skfdjf ddd  h
              fbdfe dffjdbfdj</p>
          </div>
        </div>

        <div className="chats">
          <div className="userimg">
            <img src={imgs} alt="" />
          </div>
          <div className="massage">
            <p>Lorem sit amet bhbviv  hhdfd fdd d dfdi fda ffd idafhda ihdavfi fdahfifdafajfiayv8ycb ib udub bbdf dfjdfijdb fhdabfda n dfbdihfd hfgdfdij skfdjf ddd  h
              fbdfe dffjdbfdj</p>
          </div>
        </div>

        <div className="chats active">
          <div className="userimg">
            <img src={imgs} alt="" />
          </div>
          <div className="massage">
            <p>Lorem sit amet bhbviv  hhdfd  dfbdihfd hfgdfdij skfdjf ddd  h
              fbdfe dffjdbfdj</p>
          </div>
        </div>

        <div ref={scrollbarref}></div>
      </div>

      <div className="sendmessgaebox">
        <input type="text" placeholder='Enter your message' />
        <button>Send</button>
      </div>
    </div>
  )
}

export default ChatSection