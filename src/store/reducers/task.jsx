import {AUTH_SUCCESS, GET_HABITS_SUCCESS, GET_TASK_SUCCESS, SET_TASK_SUCCESS} from "../actions/actionType";


const initState = {
  tasks: [],
  loading: true,
  error: null,
}

const initStateHabits = {
  habits: [],
  loading: true,
  error: null,
}

const initStateAuth = {
  profile: [],
  loading: true,
  error: null,
}


export function taskReducer(state = initState, action) {
  switch (action.type) {
    case GET_TASK_SUCCESS:
      return {...state, loading: false, tasks: action.payload};
    default:
      return state
  }
}


export function habitsReducer(state = initStateHabits, action) {
  switch (action.type) {
    case GET_HABITS_SUCCESS:
      return {...state, loading: false, habits: action.payload};
    default:
      return state
  }
}

export function authReducer(state = initStateAuth, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...state, loading: false, profile: action.payload};
    default:
      return state
  }
}