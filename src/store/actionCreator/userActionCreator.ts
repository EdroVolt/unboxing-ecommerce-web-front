import { Dispatch } from "react";
import Unboxing from "../../apis/unboxing";
import CartType from "../../models/Cart.model";
import OrderType from "../../models/Order.model";
import UserType from "../../models/User.model";
import WishListType from "../../models/WishList.model";
import * as actions from "../actions/types";
import * as User from "../actions/user.actions";

// ----------------  User Data --------------------------

export const getUserDetailsAPI =
  (_id: string | number) => (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.get(`/users/${_id}`)
      .then((res) => {
        console.log(res);
        dispatch(User.getUserDetails(res.data));
      })
      .catch((err) => console.log(err));

export const createUserAPI =
  (userData: UserType) => (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.post("/register", userData)
      .then((res) => {
        console.log(res);
        dispatch(User.createUser(res.data));
      })
      .catch((err) => console.log(err));

export const editUserAPI =
  (userData: UserType) => (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.put(`/users`, userData)
      .then((res) => {
        console.log(res);
        dispatch(User.editUser(res.data));
      })
      .catch((err) => console.log(err));

export const deleteUserAPI =
  (_id: string | number) => (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.delete(`/users/${_id}`)
      .then((res) => {
        console.log(res);
        dispatch(User.deleteUser(res.data._id));
      })
      .catch((err) => console.log(err));

// ----------------  User Cart --------------------------

export const getUserCartAPI =
  (_id: string | number) => (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.get(`/users/${_id}?fields=cart`)
      .then((res) => {
        console.log(res);
        dispatch(User.getUserCart(res.data.cart));
      })
      .catch((err) => console.log(err));

export const addProductToUserCartAPI =
  (_id: string | number, cart: CartType) =>
  (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.put(`/users/${_id}/cart`, cart)
      .then((res) => {
        console.log(res);
        dispatch(User.addProductToUserCart(res.data.cart));
      })
      .catch((err) => console.log(err));

export const deleteProductFromUserCartAPI =
  (_id: string | number, cart: CartType) =>
  (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.put(`/users/${_id}/cart`, cart)
      .then((res) => {
        console.log(res);
        dispatch(User.deleteProductFromUserCart(res.data.cart));
      })
      .catch((err) => console.log(err));

// ----------------  User WishList --------------------------

export const getUserWishListAPI =
  (_id: string | number) => (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.get(`/users/${_id}?fields=wishList`)
      .then((res) => {
        console.log(res);
        dispatch(User.getUserWishList(res.data.wishList));
      })
      .catch((err) => console.log(err));

export const addProductToUserWishListAPI =
  (_id: string | number, wishList: WishListType) =>
  (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.put(`/users/${_id}/wishList`, wishList)
      .then((res) => {
        console.log(res);
        dispatch(User.addProductToUserWishList(res.data.wishList));
      })
      .catch((err) => console.log(err));

export const deleteProductFromUserWishListAPI =
  (_id: string | number, wishList: WishListType) =>
  (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.put(`/users/${_id}/wishList`, wishList)
      .then((res) => {
        console.log(res);
        dispatch(User.deleteProductFromUserWishList(res.data.wishList));
      })
      .catch((err) => console.log(err));

// ----------------  User Oredrs --------------------------

export const getUserOrdersAPI =
  (_id: string | number) => (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.get(`/users/${_id}?fields=orders`)
      .then((res) => {
        console.log(res);
        dispatch(User.getUserOrders(res.data.orders));
      })
      .catch((err) => console.log(err));

export const checkoutOrder =
  (_id: string | number, order: OrderType) =>
  (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.post(`/users/${_id}/orders`, order)
      .then((res) => {
        console.log(res);
        dispatch(User.checkoutOrder(res.data.orders));
      })
      .catch((err) => console.log(err));
