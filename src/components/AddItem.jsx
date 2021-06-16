import { useRef } from "react"
import { useHistory } from "react-router-dom"
import { databaseRef } from "../firebase-config"

export default function AddItem(){
    const history = useHistory()
    const nameRef = useRef()
    const descriptionRef = useRef()
    const priceRef = useRef()
    const quantityRef = useRef()
    const imageRef = useRef()
    let category = history.location.state

    let addItemHandler = async() => {
        if(nameRef.current.value === ''){
            alert('Name cannot be empty')
            return
        } 
        if(priceRef.current.value === ''){
            alert('Price cannot be empty')
            return
        } 
        if (imageRef.current.value === ''){
            alert('Image URL cannot be empty')
            return
        }
        // eslint-disable-next-line
        let data = await databaseRef.collection(category.toLowerCase()).add({
            name: nameRef.current.value,
            price: Number(priceRef.current.value),
            description: descriptionRef.current.value,
            image: imageRef.current.value,
        })
        history.push('/inventory-page')
    }

    return(
        <div className="add-item-div">
            <h1>Add a new {category}</h1>
            <div className="name">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" ref = {nameRef}/>
            </div>
            <div className="description">
                <label htmlFor="description">Description</label>
                <input type="text" name="description" ref = {descriptionRef}/>
            </div>
            <div className="price">
                <label htmlFor="price">Price</label>
                <input type="number" name="price" ref = {priceRef}/>
            </div>
            <div className="image">
                <label htmlFor="image">Image URL</label>
                <input type="text" name = 'image' ref = {imageRef} />
            </div>
            <div className="quantity">
                <label htmlFor="quantity">Quantity</label>
                <input type="number" name="quantity" ref = {quantityRef}/>
            </div>
            <button className = 'clickable' onClick = {addItemHandler}>Add</button>
            <button className = 'clickable' onClick = {() => history.push('/inventory-page')}>Cancel</button>
        </div>
    )
}