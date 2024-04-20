import { combineReducers } from "redux";
import authReducer from "./authReducer";
// import basketReducer from './basketReducer';
// import checkoutReducer from './checkoutReducer';
// import filterReducer from './filterReducer';
// import miscReducer from './miscReducer';
// import productReducer from './productReducer';
import profileReducer from "./profileReducer";
import userReducer from "./userReducer";
import cartSlice from "../slice/cartSlice";

const rootReducer = combineReducers({
  // products: productReducer,
  // basket: basketReducer,
  auth: authReducer,
  profile: profileReducer,
  // filter: filterReducer,
  users: userReducer,
  cart: cartSlice,
  // checkout: checkoutReducer,
  // app: miscReducer
});

export default rootReducer;
