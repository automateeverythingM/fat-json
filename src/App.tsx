import React from 'react';
import './App.css';
import { AddFile } from './components/AddFile';
import { List } from './components/List';
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
