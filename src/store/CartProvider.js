import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
	items: [],
	totalAmount: 0
}

const cartReducer = (state, action) => {
	if(action.type === 'ADD_ITEM') {
		const updatedItems = state.items.concat(action.item)
		return {
			items: updatedItems
		}
	}
	return  defaultCartState;
}

const CartProvider = (props) => {

	const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState)
	const addItemToCart = (mealTitle, price) => {
		dispatchCartAction({type: 'ADD_ITEM', item: {mealTitle: mealTitle, price:price}})
	}

	const removeItemFromCart = (item) => {

	}

	const cartContext = {
		items: cartState.items,
		totalAmount: 0,
		addItem: (mealTitle, price) => {addItemToCart(mealTitle, price)},
		removeItem: (item) => {removeItemFromCart(item)}
	}
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartProvider;