import { Link } from 'react-router-dom';
import './Items.css'

const Items = ({ name, price, img, id }) => { 

    return (

    <div>
        <div className='CardList'>
            <img className='ImagenProdList' src={img} alt={name}/>
            <h2>{ name }</h2>
            <p>$ { price }</p>
            <Link to={`/detail/${id}`} className='DetailBoton'>Ver detalle</Link>
        </div>
    </div>
)

}

export default Items