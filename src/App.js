import React,{useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Store from './Redux'
import {Provider} from 'react-redux';
import Dashboard from './Screen/Dashboard/Dashboard';
import News from "./Screen/News/News"
import Drawer from './common/Drawer/Drawer'
import "./css/index.css"
import "./css/infoBox.css"
import "./css/table.css"
import "./css/app.css"
import "./css/map.css"

function App(props) { 

const [drawerCurrentPage, setdrawerCurrentPage] = useState("dashboard")
	return (
	  <div>
			<Drawer page={drawerCurrentPage} setPage={setdrawerCurrentPage} {...props}/>
			<BrowserRouter>
				<Switch>
					
					<Route path="/news" component={News} />	 
					<Route path="/dashboard" component={Dashboard} />			 
				</Switch>
			</BrowserRouter>
	  </div>

      )

}

export default App;
