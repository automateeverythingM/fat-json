import React from 'react';
import './App.css';
import { AddFile, List } from './components';
import { Provider } from './context/Context';

function App() {
	return (
		<Provider>
			<div className="container">
				<AddFile/>
				<List />
			</div>
		</Provider>
	);
}

export default App;
