export type ActionType = {
  type: string;
  payload: any;
};

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_PRODUCTS_BY_CATEGORY = "GET_ALL_PRODUCTS_BY_CATEGORY";
export const GET_ALL_PRODUCTS_BY_NAME = "GET_ALL_PRODUCTS_BY_NAME";
// export const GET_ALL_PRODUCTS_BY_MIN_PRICE = "GET_ALL_PRODUCTS_BY_MIN_PRICE";  // TODO:
// export const GET_ALL_PRODUCTS_BY_MAX_PRICE = "GET_ALL_PRODUCTS_BY_MAX_PRICE";  // TODO:
export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS";
export const GET_OFFERS = "GET_OFFERS";
// export const GET_TOP_RATED_PRODUCTS = "GET_TOP_RATED_PRODUCTS"; // TODO:
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORY_DETAILS = "GET_CATEGORY_DETAILS";

export const GET_USER_CART = "GET_USER_CART";
export const GET_USER_WISHLIST = "GET_USER_WISHLIST";
export const GET_USER_ORDERS = "GET_USER_ORDERS";
// export const GET_USER_ORDERS_BY_DATE = "GET_USER_ORDERS_BY_DATE";  // TODO:
export const GET_USER_DETAILS = "GET_USER_DETAILS";

//  ---------------- ADD ---------------------

export const ADD_PRODUCT = "ADD_PRODUCT";
// export const ADD_OFFER = "ADD_OFFER";     // NOTE: offer == product with offer property = ture
export const ADD_CATEGORY = "ADD_CATEGORY";
export const ADD_REVIEW_ON_PRODUCT = "ADD_REVIEW_ON_PRODUCT";
export const ADD_PRODUCT_TO_USER_CART = "ADD_PRODUCT_TO_USER_CART";
export const ADD_PRODUCT_TO_USER_WISHLIST = "ADD_PRODUCT_TO_USER_WISHLIST";

export const CREATE_USER = "CREATE_USER";

export const CHECKOUT_ORDER = "CHECKOUT_ORDER"; // TODO: add payment getway

//  ---------------- EDIT ---------------------

export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const EDIT_CATEGORY = "EDIT_CATEGORY";
export const EDIT_USER = "EDIT_USER";
export const CHANGE_USER_PASSWORD = "CHANGE_USER_PASSWORD";

//  ---------------- DELETE ---------------------

export const DELETE_PRODUCT_FROM_STORE = "DELETE_PRODUCT_FROM_STORE";
export const DELETE_PRODUCT_FROM_USER_CART = "DELETE_PRODUCT_FROM_USER_CART";
export const DELETE_PRODUCT_FROM_USER_WISHLIST =
  "DELETE_PRODUCT_FROM_USER_WISHLIST";
export const DELETE_USER = "DELETE_USER";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

// export const CANCEL_ORDER = "CANCEL_ORDER";

//  ---------------- Auth ---------------------

export const SIGNIN_USER = "SIGNIN_USER";
