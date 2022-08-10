import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import signUpReducer from "../reducers/signupReducer";
import signInReducer from "../reducers/signInReducer";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const middleware = [thunk];
const Reducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer
});
const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, Reducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);