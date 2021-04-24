import MealsData from './MealsData'
import Meal from '../Meal/Meal'
import './Meals.css';

const Meals = (props) => {
	const meals = MealsData.map((meal) => {
		return <Meal title={meal.title} description={meal.description} price={meal.price}></Meal>
	})

	return (
		<div className="meals-container">
			<div className="meals">
				{meals}
			</div>
		</div>
		
	)
}

export default Meals