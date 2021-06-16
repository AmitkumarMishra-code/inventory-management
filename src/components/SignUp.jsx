import { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
// import firebase from 'firebase/app'
import firebase from "../firebase-config";


export default function SignUp() {
    const history = useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()
    const password2Ref = useRef()
    const [user, setUser] = useState()

    let signUpHandler = () => {
        if(password2Ref.current.value !== passwordRef.current.value){
            alert(`Password and Confirm Password don't match`)
            return
        }
        firebase.auth().createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          // Signed in 
          setUser(userCredential.user);
          history.push('/')
          // ...
        })
        .catch((error) => {
            alert('Error: ', error.message)
          // ..
        });
    }

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <div className="name">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div>
            <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" ref = {emailRef}/>
            </div>
            <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" ref = {passwordRef}/>
            </div>
            <div className="password2">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" name="password2" ref = {password2Ref}/>
            </div>
            <button className = 'clickable' onClick = {signUpHandler}>Sign Up</button>
        </div>
    )
}