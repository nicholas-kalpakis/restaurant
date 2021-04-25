import CartContext from '../../../store/cart-context';
import './AddToCart.css'

const AddToCart = (props) => {

	
	return (
		<div>
			<div className="price">${props.price}</div>
			<button onClick={props.addToCartHandler} className="add-to-cart-button">+ ADD</button>
		</div>
	)
}

export default AddToCart;