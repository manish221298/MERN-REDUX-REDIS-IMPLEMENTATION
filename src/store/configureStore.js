import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import countReducer from '../reducers/countReducer'
import employeeReducer from '../reducers/employeeReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer,
        employee: employeeReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore