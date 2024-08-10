import React, { useContext } from 'react'
import "../StyleFiles/NavBar.css"
import imgs from "../Images/user.png"
import { AuthContext } from '../Context/AuthContext'
const NavBar = () => {



    const {currentUser} = useContext(AuthContext);

    return (
        <div className='navBar_container'>
            <div className="brand_name">
                <span>Messanger</span>
            </div>
            <div className="user_name">
                <img src={imgs} alt="" />
                <p>{currentUser?.displayName}</p>
            </div>
        </div>
    )
}

export default NavBar