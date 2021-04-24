import AddToCart from "./AddToCart";
import './Meal.css'
const Meal = (props) => {
	return (
		<div className="meal">
			<div className="meal-description">
				<div className="title">{props.title}</div>
				<div className="description">{props.description}</div>
			</div>
			<div className="meal-add-to-cart">
				<AddToCart price={props.price}></AddToCart>
			</div>
		</div>
	)
}

export default Meal;