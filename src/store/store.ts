import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  categoryReducer,
  productReducer,
  userReducer,
} from "./reducers/reducers";
// import { composeWithDevTools } from "@redux-devtools/extension";

export type StoreType = {
  user: any;
  product: any;
  category: any;
};

const reducers = combineReducers({
  user: userReducer,
  product: productReducer,
  category: categoryReducer,
});

const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;
