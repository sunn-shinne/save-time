import { combineReducers } from 'redux'
import {authReducer, habitsReducer, taskReducer} from "./task";


const appReducer = combineReducers({
  tasks: taskReducer,
  habits: habitsReducer,
  auth: authReducer
})

export const rootReducer = (state, action) => {
  return appReducer(state, action)
}
