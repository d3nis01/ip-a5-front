import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './reducers/app-reducer';
import authReducer from './reducers/auth-reducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export default rootReducer;
