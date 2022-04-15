import OrderType from "../../models/Order.model";
import UserType from "../../models/User.model";
import * as actions from "./types";

// --------- Get ------------------------------

export const getUserCartProducts = () => ({
  type: actions.GET_USER_CART_PRODUCTS,
  payload: {},
});

export const getUserWishListProducts = () => ({
  type: actions.GET_USER_WISHLIST_PRODUCTS,
  payload: {},
});

export const getUserOrders = () => ({
  type: actions.GET_USER_ORDERS,
  payload: {},
});

export const getUserOrdersByDate = (date: Date) => ({
  type: actions.GET_USER_ORDERS_BY_DATE,
  payload: {
    date,
  },
});

export const getUserDetails = () => ({
  type: actions.GET_USER_DETAILS,
  payload: {},
});

// --------- Add ------------------------------

export const addProductToCart = (productId: string | number) => ({
  type: actions.ADD_PRODUCT_TO_CART,
  payload: {
    productId,
  },
});

export const addProductToWishlist = (productId: string | number) => ({
  type: actions.ADD_PRODUCT_TO_WISHLIST,
  payload: {
    productId,
  },
});

export const createUser = (user: UserType) => ({
  type: actions.CREATE_USER,
  payload: {
    user,
  },
});

export const checkoutOrder = (order: OrderType) => ({
  type: actions.CHECKOUT_ORDER,
  payload: {
    order,
  },
});

// --------- Edit ------------------------------

export const editUser = (userData: UserType) => ({
  type: actions.EDIT_USER,
  payload: {
    userData,
  },
});

// --------- Delete ------------------------------

export const deleteProductFromCart = (productId: string | number) => ({
  type: actions.DELETE_PRODUCT_FROM_CART,
  payload: {
    productId,
  },
});

export const deleteProductFromWishList = (productId: string | number) => ({
  type: actions.DELETE_PRODUCT_FROM_WISHLIST,
  payload: {
    productId,
  },
});

export const deleteUser = () => ({
  type: actions.DELETE_PRODUCT_FROM_WISHLIST,
  payload: {},
});

// export const cancelOrder = (orderId) => ({
//   type: actions.CANCEL_ORDER,
//   payload: {
//     orderId
//   },
// });
