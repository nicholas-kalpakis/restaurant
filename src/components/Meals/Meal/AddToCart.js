import './AddToCart.css'
const AddToCart = (props) => {
	return (
		<div>
			<div className="price">${props.price}</div>
			<button className="add-to-cart-button">ADD</button>
		</div>
	)
}

export default AddToCart;