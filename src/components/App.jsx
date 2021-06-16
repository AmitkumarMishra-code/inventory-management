import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import InventoryPage from "./InventoryPage"
import Login from "./Login"
import SignUp from "./SignUp"
export default function App(){
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path = '/'>
                        <Login />
                    </Route>
                    <Route exact path = '/sign-up'>
                        <SignUp />
                    </Route>
                    <Route path = '/inventory-page'>
                        <InventoryPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}