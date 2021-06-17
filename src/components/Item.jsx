export default function Item({ name, description, price, quantity, image, id, deleteHandler }) {
    return (
        <div className="item">
            <div className="item-details">
                <img src={image} alt="" />
                <div className="info">
                    <p className='name' >{name}</p>
                    <p className='description'><strong>Description : </strong>{description.length ? description : 'N/A'}</p>
                    <p className='price'><strong>Price : </strong>{price}</p>
                    {quantity && <p className='quantity'><strong>Quantity : </strong>{quantity}</p>}
                </div>
            </div>
            <div className="remove"><button className='delete' onClick = {() => deleteHandler(id)}>x</button></div>
        </div>
    )
}