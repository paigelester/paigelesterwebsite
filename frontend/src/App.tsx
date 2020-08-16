import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from 'components/pages/home';
import ComingSoonPage from 'components/pages/coming-soon';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/home' component={HomePage} />
				<Route path='/' component={ComingSoonPage} />
			</Switch>
		</Router>
	);
}

export default App;
