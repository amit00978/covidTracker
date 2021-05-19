import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Store from './Redux'
import {Provider} from 'react-redux';
import Dashboard from './Screen/Dashboard/Dashboard';
import "./css/index.css"
import "./css/infoBox.css"
import "./css/table.css"
import "./css/app.css"
import "./css/map.css"

function App() { 


  return (
        	<BrowserRouter>
				<Switch>
			  		<Route exact={true} path="/" component={Dashboard} />		  
				</Switch>
			</BrowserRouter>
      )

}

export default App;
