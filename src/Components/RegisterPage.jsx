import React, { useContext } from 'react'
import "../StyleFiles/RegisterPage.css"
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext';

const RegisterPage = () => {

const {handleRegistration, registrationerr} = useContext(UserContext);

    return (
        <div className='registerpage_container'>
            <div className="instruction">
                <h5>Note: Password should be atleast 8 digit</h5>
            </div>
            <form method='POST' onSubmit={handleRegistration}>

                <h2>Register Here</h2>
                <input type="text" name="" placeholder='Enter your name' />
                <input type="email" name="" placeholder='Enter your email' />
                <input type="password" name="" placeholder='Enter your password' />
                <input className='fileinput' type="file" name="" placeholder='upload image' />

                <button>Create Account</button>

            {registrationerr && <span>Something went wrong!</span>}

            </form>
            <div className='register_footer'>
                <h5>Already have a account? <Link to="/">Login Here</Link> </h5>
            </div>


        </div>
    )
}

export default RegisterPage