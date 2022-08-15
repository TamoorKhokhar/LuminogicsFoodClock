import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import signUpReducer from '../reducers/signupReducer';
import allOrderReducer from '../reducers/morningOrderReducer';
import eveningResultReducer from '../reducers/eveningTeaResultReducer';
import lunchResultReducer from '../reducers/lunchResult';
import userOrderReducer from '../reducers/morningDataReducer';
import signInReducer from '../reducers/signInReducer';
import lunchDataReducer from '../reducers/lunchDataReducer';
import eveningDataReducer from '../reducers/eveningDataReducer';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const middleware = [thunk];
const Reducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  userOrder: userOrderReducer,
  allOrder: allOrderReducer,
  lunch: lunchResultReducer,
  evening: eveningResultReducer,
  lunchOrder: lunchDataReducer,
  eveningOrder: eveningDataReducer
});
const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, Reducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
