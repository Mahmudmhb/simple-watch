import { useState, useEffect } from "react";
import initializAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signOut, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithPopup } from "firebase/auth";


initializAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false)


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 

                setAuthError('');

                const newUser = { email, displayName: name };
                setUser(newUser);

                // console.log(newUser)

                // save user 
                saveUser(email, name, 'POST');

                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace('/')

                // saveUser(email, name, 'POST');
                // ...
            })
            .catch((error) => {

                setAuthError(error.message)
                // ..
            }).finally(() => setIsLoading(false));

    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true)

        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                saveUser(user.email, user.displayName, "PUT")
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                setAuthError(error.message)

                // ...
            }).finally(() => setIsLoading(false));
    }


    useEffect(() => {
        fetch(`https://young-river-12633.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])

    const logOut = () => {

        signOut(auth).then(() => {
            setAuthError('');
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            setAuthError(error.message)

        });

    }
    const login = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 

                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
                // ...
            })
            .catch((error) => {

                setAuthError(error.message)

            }).finally(() => setIsLoading(false));


    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                const uid = user.uid;
                // ...
            } else {
                setUser({})
            }
            setIsLoading(false)

        });
        return () => unsubscribe;
    }, [auth]);

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        console.log(user)
        fetch("https://young-river-12633.herokuapp.com/users", {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => setUser(data))

    }

    return {
        user,
        registerUser,
        isLoading,
        login,
        logOut,
        authError,
        admin,
        signInWithGoogle

    }

}
export default useFirebase;