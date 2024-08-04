import React from 'react'
import "../StyleFiles/LoginPage.css"
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../Firebase";

const LoginPage = () => {

    const handleLogin = async (e) => {
        e.preventDefault()
        const email1 = e.target[0].value;
        const password1 = e.target[1].value;

        try {
            const currentUser = await signInWithEmailAndPassword(auth, email1, password1);
            await setDoc(doc(db, "Userlist", currentUser.user.uid), {
                name: currentUser.user.displayName,
                email: currentUser.user.email,
                id: currentUser.user.uid,
                photoURL: currentUser.user.photoURL,
            });
            console.log(currentUser.user);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='LoginPage_conatiner'>
         
            <form method='POST' onSubmit={handleLogin}>
                <h2>Login Here</h2>
                <input type="email" name="" placeholder='Enter your Email' />
                <input type="password" name="" placeholder='Enter your Password' />
                <button>Login</button>
                <span>Something went wrong!</span>
            </form>
            <div className='login_footer'>
                <h5>New user? <Link to="/Register">Register Here</Link> </h5>
            </div>

        </div>
    )
}

export default LoginPage