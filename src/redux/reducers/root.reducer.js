import { combineReducers } from 'redux'
import EmployeeReducer from './emloyee.reducer'
import UserReducer from './user.reducer'

const RootReducer = combineReducers({
   employee: EmployeeReducer,
   user:UserReducer
})

export default RootReducer