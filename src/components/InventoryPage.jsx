import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase-config";
import { databaseRef } from "../firebase-config";
import Item from "./Item";

export default function InventoryPage() {
    const history = useHistory()
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [displayData, setDisplayData] = useState([])

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

    let getCategories = async () => {
        let result = await databaseRef.collection('categories').get()
        let data = []
        result.docs.forEach(doc => data.push(doc.data().name.toUpperCase()))
        console.log(data)
        setCategories(data)
        setSelectedCategory(data[0])
    }

    let getInventory = async (category) => {
        if(category.length === 0){
            return
        }
        let result = await databaseRef.collection(category.toLowerCase()).get()
        let items = []
        result.docs.forEach(doc => items.push(doc.data()))
        console.log(items)
        setDisplayData(items)
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        getInventory(selectedCategory)
    }, [selectedCategory])

    let addCategoryHandler = () => {

    }

    let addItemHandler = () => {
        history.push({
            pathname:'/add-item',
            state:selectedCategory
        })
    }

    return (
        <div className="inventory">
            <div className="header"><h1>Inventory</h1>
                <button className='clickable logout' onClick={logoutHandler}>Log Out</button></div>
            <div className="content">
                <div className="content-header">
                    <div className="categories">
                        <label htmlFor="category">Select a Category: </label>
                        <select name="category" id="category" onChange={(e) => setSelectedCategory(e.target.value)}>
                            {categories.length > 0 && categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
                        </select>
                    </div>
                    <button className="add-category" onClick={addCategoryHandler}>Add New Category</button>
                    <button className="add-item" onClick={addItemHandler}>Add an Item</button>
                </div>
                <div className="content-details">
                    {displayData.length>0 && displayData.map((item,index) => <Item 
                                                                                name ={item.name}
                                                                                description = {item.description}
                                                                                price = {item.price}
                                                                                image = {item.image}
                                                                                key = {index}
                                                                                quantity = {item.quantity ? item.quantity:null}
                                                                                />)}
                </div>
            </div>
        </div>

    )
}