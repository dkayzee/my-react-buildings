import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'

import BuildingsList from "../BuildingsList/BuildingsList"
import FavoriteBuildingsPage from '../FavoriteBuildingsPage/FavoriteBuildingsPage';

class App extends Component {
  render() {
    return (
     	<div className="App">
     		<Header />
	        <Switch>
	          <Route path='/' exact component={ BuildingsList }/>
	          <Route path='/favorites' component={ FavoriteBuildingsPage }/>
	        </Switch>
	    </div>
    )
  }
}

export default App;
