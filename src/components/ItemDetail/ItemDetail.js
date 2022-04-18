import ItemCount from "../ItemCount/ItemCount";
import {getProducts} from '../../asyncmock'; 
import { useState, useEffect } from 'react';
import '../ItemDetail/ItemDetail.css';

const ItemDetail = ({ id, name, price, img, category, tipo, creador, description, stock}) => {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [products])

    const handleOnAdd = (quantity) => {
        if(
            quantity === 0){
                console.log(`Carrito Vacio`)
            }else {
                console.log(`Tenes ${quantity} productos en el carrito`)
            }
    }

return (
    <div className="ContDetail">
        <div>
            <img className="imagenDetalle" src={img} alt={name}/>
        </div>
        <div>
            <h3>{name}</h3>
            <p>$ {price}</p>
            <ul>
                <li>{tipo}</li>
                <li>{creador}</li>
                <li>{description}</li>
                <li>Stock: {stock}</li>
            </ul>
        </div>
        <ItemCount initial={1} stock={8} onAdd={handleOnAdd} />
    </div>
)
}


export default ItemDetail;