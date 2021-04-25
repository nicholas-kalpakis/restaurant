import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
const HeaderCartButton = props => {

	const cartContext = useContext(CartContext);

	return (
		<button className={classes.button}>
			<span className={classes.icon}>
				<CartIcon/>
			</span>
			<span className={classes['your-cart']}>
				Your Cart
			</span>
			<span className={classes.badge}>
				{cartContext.items.length}
			</span>
		</button>
	)
}

export default HeaderCartButton