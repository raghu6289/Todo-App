import taskReducer from "./taskReducer";
import theme from "./theme";
import { combineReducers } from 'redux'


const allReducers = combineReducers({ taskReducer, theme })

export default allReducers