import React from 'react'
import { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

import { auth, db } from "./Firebase";

const MainPage = () => {

    const [name, setName] = useState("");

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


    const handleLogin = async (e) => {
        e.preventDefault();

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

    console.log(auth);

    const signoutbtn = async () => {
        await signOut(auth);

        console.log(auth.currentUser);
    }
    const finduser = async () => {
        
        const q = query(collection(db, "Userlist"), where("name", "==", name));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
    
            console.log( doc.data().id);
            console.log(auth.currentUser.uid);

           const value = doc.data().id>auth.currentUser.uid ? doc.data().id + auth.currentUser.uid :  auth.currentUser.uid +doc.data().id;

           console.log(value);
        });
       
    }

    return (
        <div className='Mainpage'>
            <div className="part1">


                <form method='POST' onSubmit={handleRegistration}>

                    <h2>Register Here</h2>
                    <input type="text" name="" placeholder='Enter your name' />
                    <input type="email" name="" placeholder='Enter your email' />
                    <input type="password" name="" placeholder='Enter your password' />
                    <input type="file" name="" placeholder='upload image' />

                    <button>Create Account</button>

                </form>



            </div>
            <div className="part2">
                <form method='POST' onSubmit={handleLogin}>
                    <h2>Login Here</h2>

                    <input type="email" name="" placeholder='Enter your email' />
                    <input type="password" name="" placeholder='Enter your password' />
                    <button >Login</button>

                </form>


            </div>

            <button onClick={signoutbtn}>Signout</button>
            <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={finduser}>find data</button>
        </div>
    )
}

export default MainPage