import { combineReducers, createStore } from 'redux'
import { dataReducer, loadingReducer, movieReducer } from './reducers'

const rootReducer = combineReducers({
    movies : movieReducer,
    loading: loadingReducer,
    data: dataReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;