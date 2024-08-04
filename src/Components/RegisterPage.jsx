import React from 'react'
import "../StyleFiles/RegisterPage.css"
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase";

const RegisterPage = () => {

    const handleRegistration = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            try {
                await updateProfile(res.user, {
                    displayName: displayName,
                    photoURL: "https://example.com/jane-q-user/profile.jpg",
                });

            }
            catch (error) {
                console.log(error.code);
            }

            console.log(res.user);
        } catch (error) {

            console.log(error);
        }

    }
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

                <span>Something went wrong!</span>

            </form>
            <div className='register_footer'>
                <h5>Already have a account? <Link to="/">Login Here</Link> </h5>
            </div>


        </div>
    )
}

export default RegisterPage