import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  authReducer,
  categoryReducer,
  productReducer,
  userReducer,
} from "./reducers/reducers";
import { composeWithDevTools } from "@redux-devtools/extension";

export type StoreType = {
  user: any;
  product: any;
  category: any;
  auth: any;
};

const reducers = combineReducers({
  user: userReducer,
  product: productReducer,
  category: categoryReducer,
  auth: authReducer,
});

const Store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;
