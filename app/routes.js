import React from 'react'
import { Route, IndexRoute } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'

// Routes for the products list and products details pages

const routes = (
	<div>
		<Route exact path="/" component={ HomeContainer } />
		<Route exact path="/home/index" component={ HomeContainer } />
		<Route exact path="/home" component={ HomeContainer } />
	</div>
)

export default routes;
