import { useSelector } from "react-redux";
import CartType from "../../models/Cart.model";
import CategoryType from "../../models/Category.model";
import OrderType from "../../models/Order.model";
import ProductType from "../../models/Product.model";
import UserType from "../../models/User.model";
import WishListType from "../../models/WishList.model";
import * as actions from "../actions/types";

export type stateType = {
  user: UserType | null;
  products: ProductType[];
  categories: CategoryType[];
  cart: CartType;
  wishList: WishListType;
  orders: OrderType[];
};

const initialState: stateType = {
  user: null,
  products: [],
  categories: [],
  cart: { products: [], totalPrice: 0 },
  wishList: { products: [], totalPrice: 0 },
  orders: [
    // {
    //   products: [{ product: "", count: 0 }],
    //   paymentMethod: "cash",
    //   totalCount: 0,
    // },
  ],
};

export const userReducer = (
  state: stateType = initialState,
  { type, payload }: actions.ActionType
): stateType => {
  switch (type) {
    // user info
    case actions.CREATE_USER:
    case actions.GET_USER_DETAILS:
    case actions.CHANGE_USER_PASSWORD:
    case actions.EDIT_USER:
      return { ...state, user: payload.user };
    case actions.DELETE_USER:
      return { ...state, user: null };

    // user cart
    case actions.GET_USER_CART:
    case actions.ADD_PRODUCT_TO_USER_CART:
    case actions.DELETE_PRODUCT_FROM_USER_CART:
      return { ...state, cart: payload.cart };

    // user wishList
    case actions.GET_USER_WISHLIST:
    case actions.ADD_PRODUCT_TO_USER_WISHLIST:
    case actions.DELETE_PRODUCT_FROM_USER_WISHLIST:
      return { ...state, wishList: payload.wishList };

    // user orders
    case actions.GET_USER_ORDERS:
    case actions.CHECKOUT_ORDER:
      return { ...state, orders: payload.orders };

    default:
      return state;
  }
};

export const productReducer = (
  state: stateType = initialState,
  { type, payload }: actions.ActionType
): stateType => {
  switch (type) {
    // products
    case actions.GET_ALL_PRODUCTS:
    case actions.GET_ALL_PRODUCTS_BY_CATEGORY:
    case actions.GET_ALL_PRODUCTS_BY_NAME:
    case actions.GET_PRODUCT_DETAILS:
      return { ...state, products: payload.products };

    default:
      return state;
  }
};

export const categoryReducer = (
  state: stateType = initialState,
  { type, payload }: actions.ActionType
): stateType => {
  switch (type) {
    // products
    case actions.GET_CATEGORIES:
      return { ...state, categories: payload.categories };

    default:
      return state;
  }
};

export const authReducer = (
  state: stateType = initialState,
  { type, payload }: actions.ActionType
) => {
  switch (type) {
    case actions.SIGNIN_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user };

    default:
      return state;
  }
};
