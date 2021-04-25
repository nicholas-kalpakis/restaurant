import AddToCart from "./AddToCart";
import './Meal.css'
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
const Meal = (props) => {

	const cartContext = useContext(CartContext);

	const addToCartHandler = () => {
		cartContext.addItem(props.title, props.price)
	}
	return (
		<div className="meal">
			<div className="meal-description">
				<div className="title">{props.title}</div>
				<div className="description">{props.description}</div>
			</div>
			<div className="meal-add-to-cart">
				<AddToCart addToCartHandler={addToCartHandler} mealTitle={props.title} price={props.price}></AddToCart>
			</div>
		</div>
	)
}

export default Meal;