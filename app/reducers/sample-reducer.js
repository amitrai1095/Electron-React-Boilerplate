import { ActionTypes } from '../actions'

let init = {
	data: []
}

export default function dataReducer(state = init, action){
	try{
		switch(action.type){
			case ActionTypes.LOADING_DATA:
				return{
					...state
				}

			case ActionTypes.LOADED_DATA:
				let responseData = []
				responseData.push(action.payload)
				return{
					...state,
					data: responseData
				}
		}
	}
	catch(e){
		console.error(e.message)
	}

	return state
}