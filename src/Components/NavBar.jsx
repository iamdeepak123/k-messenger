import React from 'react'
import "../StyleFiles/NavBar.css"
import imgs from "../Images/user.png"
const NavBar = () => {
    return (
        <div className='navBar_container'>
            <div className="brand_name">
                <span>K-Messanger</span>
            </div>
            <div className="user_name">
                <img src={imgs} alt="" />
                <p>Deepak</p>
            </div>
        </div>
    )
}

export default NavBar