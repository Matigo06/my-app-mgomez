import Items from '../items/Items'
import './ItemList.css'

const ItemList = ({products}) => {
    return (
        <div className='menuProd'>
            {products.map(prod => <Items key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList