import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
import  carsReducer  from './reducers/carsReducer';
import { alertReducer } from './reducers/alertReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import loginReducer from './reducers/loginReducer'
import carlistReducer  from './reducers/carlistReducer'
import carReducer from './reducers/carDetailReducer'
import reservationReducer from './reducers/reservationReducer';
import profileReducer from "./reducers/profileReduce";
import carInfoReducer from './reducers/renter'
//import passwordResetReducer from './reducers/passwordreset';
import {
  passwordResetRequestReducer,
  passwordResetReducer,
} from "./reducers/passwordreset";

const rootReducer = combineReducers({
  carsReducer,
  alertReducer,
  userReducer,
  loginReducer,
  carlistReducer,
  carReducer,
  profileReducer,
  reservationReducer,
  passwordResetReducer,
  passwordResetRequestReducer,
  carInfoReducer,
});






const middleware = [thunk];

const store = configureStore({
  reducer:rootReducer,
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

});

export default store

