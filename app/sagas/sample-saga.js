import { call, put } from 'redux-saga/effects';
import { Actions, ActionTypes } from '../actions';


const DEFAULTS = {
  q: ""
};

export default [
  [ActionTypes.GET_DATA, getData],
];


export function* getData({payload}){
	let some_payload_data = payload.some_data

	yield put(Actions.loadingData())

	const fetchData = () => new Promise((resolve, reject) => {
		let data = {
			"some_variable":"some_data"
		}
		resolve(data)
	})

	const result = yield fetchData()
	yield put(Actions.loadedData(result))
}