// import { createContext, useEffect, useState } from "react";
// import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { app } from "../Firebase/firebase";
// // import axios from "axios";

// export const AuthContext = createContext( )

// const auth = getAuth(app)


// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true)

//     // Google
//     const googleProvider = new GoogleAuthProvider()

//     // create user 
//     const createUser = (email, password,) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     // user with email signin 
//     const signIn = (email, password) => {
//         setLoading(true)
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     //google user sign in
//     const googleSignIn = () => {
//         setLoading(true)
//         return signInWithPopup(auth, googleProvider)
//     }

//     // user with email  sign out 
//     const logOut = () => {
//         setLoading(true)
//         return signOut(auth)
//     }

//     const updateUserProfile = (name, photoLink) => {
//         return updateProfile(auth.currentUser, {
//             displayName: name, photoURL: photoLink
//         })
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser);
//             // console.log('current user', currentUser);

//             // get and set token 
//             if (currentUser) {
//                 axios.post('https://bistro-boss-server-side-omega.vercel.app/jwt', { email: currentUser.email })
//                     .then(data => {
//                         // console.log(data.data.token) 
//                         localStorage.setItem('access-token', data.data.token)
//                         setLoading(false)
//                     })
//             }
//             else {
//                 localStorage.removeItem('access-token')
//             }

           
//         });
//         return () => {
//             return unsubscribe();
//         }
//     }, [])

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         signIn,
//         googleSignIn,
//         logOut,
//         updateUserProfile,


//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;