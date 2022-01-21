import React from 'react';
import './App.css';
import { List } from './components/List';
import { Provider } from './context/Context';

function App() {
	return (
		<Provider>
			<div className="container">
				<List />
			</div>
		</Provider>
	);
}

export default App;
