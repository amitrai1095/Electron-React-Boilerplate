// This container is the parent screen which comes once the User logs In

import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { Actions } from '../actions'
import SampleComponent from '../components/common/SampleComponent'

class HomeContainer extends React.Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		console.log(this.props.getData({"some_data":"some_data"}))
	}

	componentDidUpdate(){

	}

	render() {
		return(
			<div>
				<SampleComponent />
				<h1>Home Container Render</h1>
			</div>
		)
	}
}

function mapStateToProps (state, props) {
  return state;
}

export default connect(mapStateToProps, Actions)(HomeContainer)