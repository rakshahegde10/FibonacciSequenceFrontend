import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InputForm from './components/InputForm';
import ResultsPage from './components/ResultsPage';


function App() {

return (
	<div>
		<Routes>
			<Route exact path="/" element={<InputForm/>}/>
			<Route exact path="/results" element={<ResultsPage/>}/>
		</Routes>
	</div>
);
}

export default App;