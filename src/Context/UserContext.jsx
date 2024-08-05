import React, { createContext, useContext, useReducer, useState } from 'react'
import reducer from "../Reducer/Reducer"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { auth, db } from "../Firebase";
import Cookies from "universal-cookie";
import { AuthContext } from './AuthContext';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const { currentUser } = useContext(AuthContext);


    const Cookie = new Cookies();
    const [registrationerr, setRegistrationerr] = useState(false);
    const [loginerr, setLoginerr] = useState(false);
    const [auths, setAuths] = useState(Cookie.get("auth-token"));
    const [user, setUser] = useState("");



    const initialstate = {

    }

    //Loginbtn code//
    const handleLogin = async (e) => {

        e.preventDefault()
        const email1 = e.target[0].value;
        const password1 = e.target[1].value;

        try {
            const currentUser = await signInWithEmailAndPassword(auth, email1, password1);
            Cookie.set("auth-token", currentUser.user.refreshToken);
            setAuths(true);
            await setDoc(doc(db, "Userlist", currentUser.user.uid), {
                name: currentUser.user.displayName,
                email: currentUser.user.email,
                id: currentUser.user.uid,
                photoURL: currentUser.user.photoURL,
            });

            console.log(currentUser.user);

        } catch (error) {
            console.log(error);
            setLoginerr(true)
        }


    }

    // registration//////////////////////////
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
                setRegistrationerr(true)
            }

            console.log(res.user);
        } catch (error) {

            console.log(error);
            setRegistrationerr(true)
        }

    }

    //signoutbtn/////////////
    const signoutbtn = async () => {
        await signOut(auth);
        Cookie.remove("auth-token");
        setAuths(false)
        console.log(auth.currentUser);
    }


    // const addchatlist = async () => {

    //     if (currentUser === "null") return alert("Please Login first");

    //     const combineID = user.id > currentUser.uid ? user.id + currentUser.uid : currentUser.uid + user.id;

    //     console.log(combineID);

    //     const res = await getDoc(doc(db, "chatlist", combineID));

    //     if (!res.exists()) {

    //         await setDoc(doc(db, "chatlist", combineID), { message: [] });
    //     }



    // }


    const findUser = async (name, setName) => {
        const q = query(collection(db, "Userlist"), where("name", "==", name));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setUser(doc.data());
            console.log(doc.data());
            // const value = doc.data().id > auth.currentUser.uid ? doc.data().id + auth.currentUser.uid : auth.currentUser.uid + doc.data().id;
        });

        setName("");

    }



    const [state, dispatch] = useReducer(reducer, initialstate);

    return (
        <UserContext.Provider value={{ ...state, handleLogin, auths, handleRegistration, signoutbtn, registrationerr, findUser, setUser, loginerr, user }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
export { UserContext }