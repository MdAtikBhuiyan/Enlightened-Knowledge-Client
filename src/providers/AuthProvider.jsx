import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // create an account 
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // sign out user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // user observe and set an state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            // for using pass to jwt server
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };

            console.log("observe user", currentUser);
            // setUser(currentUser);
            // setLoading(false)

            if (currentUser) {
                fetch('https://asn-library-management-server-11.vercel.app/jwt', {
                    credentials: 'include',
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('jwt token response', data);
                        setUser(currentUser);
                        setLoading(false)
                    })
                    .catch(err => {
                        console.log("jwt token err", err);
                    })
            }
            else {

                setUser(currentUser);
                setLoading(false)

                // jwt token wiil be clear if user logout / user value is null
                axios.post('https://asn-library-management-server-11.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log("jwt logout", res.data);
                    })
            }

        })
        return () => unSubscribe()
    }, [])



    const authInfo = {
        user,
        loading,
        signUp,
        logIn,
        googleSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;