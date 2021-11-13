import initializeAuthentication from "../components/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');


    const auth = getAuth();

    //user register
    const registerUser = (email, password,name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password,)
            .then((result) => {
                handelUserInfoRegister(result.user.email);
                setAuthError('');
                const newUser = {email, displayName: name};
                setUser(newUser);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                  }).catch((error) => {
                  });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // user add to database 
    const handelUserInfoRegister = (email) => {
        fetch('https://gentle-inlet-34373.herokuapp.com/addUserInfo', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({email})
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };

    //user login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    // user signOut
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(() => setIsLoading(false));
    }


    return {
        user,
        isLoading,
        logout,
        loginUser,
        authError,
        registerUser
    }

}
export default useFirebase;