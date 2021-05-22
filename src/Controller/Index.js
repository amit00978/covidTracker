import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Store from '../Redux'
import { Provider } from 'react-redux';
import "../css/index.css"
import "../css/infoBox.css"
import "../css/table.css"
import "../css/app.css"
import "../css/map.css"
import App from "../App"
import News from "../Screen/News/News"




const ReduxStore = Store();


function Index() {
    return (
        	
		<Provider store={ReduxStore}>
            <BrowserRouter>
                <Switch>
					<Route path="/" component={App }/>
				</Switch>
			</BrowserRouter>
		</Provider>
	
    )
}


export default Index;
