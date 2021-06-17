import { useContext, useRef } from "react"
import { useHistory } from "react-router-dom"
import UserContext from "../context/userContext";
import firebase from "../firebase-config";

export default function Login() {
    const history = useHistory()
    const {dispatch} = useContext(UserContext)
    const emailRef = useRef()
    const passwordRef = useRef()
    let loginHandler = () => {
        firebase.auth().signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          // Signed in
        //   setUser(userCredential.user);
          dispatch({type:'set_user', payload: userCredential.user})
          history.push('/inventory-page')
          // ...
        })
        .catch((error) => {
            console.log(error)
          alert('Error: '+ error.message)
          dispatch('reset_user')
        });
    }

    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          dispatch('reset_user')
          history.push('/')
        }
      });

    return (
        <div className="login">
            <div className="login-container">
                <h1>Log In</h1>

                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" ref = {emailRef} />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" ref={passwordRef}/>
                </div>
                <button className = 'clickable' onClick = {loginHandler}>Log In</button>
                <p className = 'clickable signup-message' onClick={() => history.push('/sign-up')}>New User? Sign Up by clicking here</p>
            </div>
        </div>
    )
}