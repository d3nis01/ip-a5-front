import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './reducers/app-reducer';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
