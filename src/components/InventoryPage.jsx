import { useHistory } from "react-router-dom";
import firebase from "../firebase-config";

export default function InventoryPage(){
    const history = useHistory()
    let logoutHandler = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            alert('Signed Out Successfully')
            history.push('/')
          }).catch((error) => {
              alert('Error: ', error.message)
            // An error happened.
          });
    }
    return (

        <div className="test">
        <h1>Logged In</h1>
        <button className = 'clickable logout' onClick = {logoutHandler}>Log Out</button>
        </div>
        
    )
}