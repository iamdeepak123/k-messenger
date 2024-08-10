import React, { useContext } from 'react'
import "../StyleFiles/LoginPage.css"
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext';
import Homepage from "../Components/Homepage"

const LoginPage = () => {

    const {handleLogin ,loginerr,auths} = useContext(UserContext)

    return (

        <>

        {auths ? <Homepage/> :
        <div className='LoginPage_conatiner'>
        
            <form method='POST' onSubmit={handleLogin}>
                <h2>Login Here</h2>
                <input type="email" name="" placeholder='Enter your Email' />
                <input type="password" name="" placeholder='Enter your Password' />
                <button>Login</button>
                {loginerr && <span>Something went wrong!</span>}
            </form>
            <div className='login_footer'>
                <h5>New user? <Link to="/Register">Register Here</Link> </h5>
            </div>

        </div>
    }
        </>
    )
}

export default LoginPage