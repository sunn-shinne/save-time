import { createStore, applyMiddleware  } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {rootReducer} from "./reducers";

// так как теперь наш редьюсер составной
export const store = createStore(rootReducer, applyMiddleware(thunk, logger) )
