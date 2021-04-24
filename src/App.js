import './App.css'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals/Meals'

function App() {
  return (
    <div>
		<div className="header">
			<Header/>
		</div>
		
		<Meals/>
	</div>
  );
}

export default App;
