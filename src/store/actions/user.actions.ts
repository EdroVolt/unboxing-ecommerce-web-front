import CartType from "../../models/Cart.model";
import OrderType from "../../models/Order.model";
import UserType from "../../models/User.model";
import WishListType from "../../models/WishList.model";
import * as actions from "./types";

// --------- Get ------------------------------

export const getUserCart = (cart: CartType) => ({
  type: actions.GET_USER_CART,
  payload: {
    cart,
  },
});

export const getUserWishList = (wishList: WishListType) => ({
  type: actions.GET_USER_WISHLIST,
  payload: {
    wishList,
  },
});

export const getUserOrders = (orders: OrderType[]) => ({
  type: actions.GET_USER_ORDERS,
  payload: {
    orders,
  },
});

export const getUserDetails = (user: UserType) => ({
  type: actions.GET_USER_DETAILS,
  payload: {
    user,
  },
});

// --------- Add ------------------------------

export const addProductToUserCart = (cart: CartType) => ({
  type: actions.ADD_PRODUCT_TO_USER_CART,
  payload: {
    cart,
  },
});

export const addProductToUserWishList = (wishList: WishListType) => ({
  type: actions.ADD_PRODUCT_TO_USER_WISHLIST,
  payload: {
    wishList,
  },
});

export const createUser = (user: UserType) => ({
  type: actions.CREATE_USER,
  payload: {
    user,
  },
});

export const checkoutOrder = (orders: OrderType[]) => ({
  type: actions.CHECKOUT_ORDER,
  payload: {
    orders,
  },
});

// --------- Edit ------------------------------

export const editUser = (user: UserType) => ({
  type: actions.EDIT_USER,
  payload: {
    user,
  },
});
// --------- change password ------------------------------

export const changeUserPassword = (user: UserType) => ({
  type: actions.CHANGE_USER_PASSWORD,
  payload: {
    user,
  },
});
// --------- Delete ------------------------------

export const deleteProductFromUserCart = (productId: string | number) => ({
  type: actions.DELETE_PRODUCT_FROM_USER_CART,
  payload: {
    productId,
  },
});

export const deleteProductFromUserWishList = (productId: string | number) => ({
  type: actions.DELETE_PRODUCT_FROM_USER_WISHLIST,
  payload: {
    productId,
  },
});

export const deleteUser = (_id: string | number) => ({
  type: actions.DELETE_USER,
  payload: {
    _id,
  },
});
