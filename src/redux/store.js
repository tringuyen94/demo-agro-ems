import {createStore,applyMiddleware} from 'redux'
import RootReducer  from './reducers/root.reducer'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

const middleware= [thunk]


if (process.env.NODE_ENV !== 'production') {
   middleware.push(createLogger())
}

const store = createStore(RootReducer,applyMiddleware(...middleware))

export default store