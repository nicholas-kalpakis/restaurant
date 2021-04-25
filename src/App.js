import './App.css'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals/Meals'
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
		<div className="header">
			<Header/>
		</div>
		<Meals/>
	</CartProvider>
  );
}

export default App;
