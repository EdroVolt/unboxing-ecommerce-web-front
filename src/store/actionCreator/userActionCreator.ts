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
    Unboxing.get(`/users/${_id}`).then((res) => {
      console.log(res);
      dispatch(User.getUserDetails(res.data));
    });

export const getMeAPI = () => (dispatch: Dispatch<actions.ActionType>) =>
  Unboxing.get(`/users/me`).then((res) => {
    console.log(res);
    dispatch(User.getUserDetails(res.data));
  });

export const createUserAPI =
  (userData: UserType) => (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.post("/register", userData).then((res) => {
      console.log(res);
      dispatch(User.createUser(res.data));
    });

export const editUserAPI =
  (userData: UserType) => (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.put(`/users/${userData._id}`, userData).then((res) => {
      console.log(res);
      dispatch(User.editUser(res.data));
    });
export const changeUserPasswordAPI =
  (_id: string, newPassword: string, oldPassword: string) =>
  (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.put(`/users/${_id}/changePassword`, {
      newPassword,
      oldPassword,
    }).then((res) => {
      console.log(res);
      dispatch(User.changeUserPassword(res.data));
    });

export const deleteUserAPI =
  (_id: string | number) => (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.delete(`/users/${_id}`).then((res) => {
      console.log(res);
      dispatch(User.deleteUser(res.data._id));
    });

// ----------------  User Cart --------------------------

export const getMyCartAPI = () => (dispatch: Dispatch<actions.ActionType>) =>
  Unboxing.get(`/users/me/cart`).then((res) => {
    console.log(res);
    dispatch(User.addProductToUserCart(res.data));
  });

export const addProductToMyCartAPI =
  (product: { porduct: string; count: number }) =>
  (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.post(`/users/me/cart`, product).then((res) => {
      console.log(res);
      dispatch(User.addProductToUserCart(res.data));
    });

export const deleteProductFromMyCartAPI =
  (productId: string) => (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.delete(`/users/me/cart`, { data: { product: productId } }).then(
      (res) => {
        console.log(res);
        dispatch(User.deleteProductFromUserCart(res.data));
      }
    );

// ----------------  User WishList --------------------------

export const getMyWishListAPI =
  () => (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.get(`/users/me/wishList`).then((res) => {
      console.log(res);
      dispatch(User.getUserWishList(res.data));
    });

export const addProductToMyWishListAPI =
  (product: { porduct: string; count: number }) =>
  (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.post(`/users/me/wishList`, product).then((res) => {
      console.log(res);
      dispatch(User.addProductToUserWishList(res.data));
    });

export const deleteProductFromMyWishListAPI =
  (productId: string | number) => (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.delete(`/users/me/wishList`, {
      data: { product: productId },
    }).then((res) => {
      console.log(res);
      dispatch(User.deleteProductFromUserWishList(res.data));
    });

// ----------------  User Oredrs --------------------------

export const getUserOrdersAPI =
  (_id: string | number) => (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.get(`/users/${_id}?fields=orders`).then((res) => {
      console.log(res);
      dispatch(User.getUserOrders(res.data));
    });

export const checkoutOrder =
  (_id: string | number, order: OrderType) =>
  (dispatch: Dispatch<actions.ActionType>) =>
    Unboxing.post(`/users/${_id}/orders`, order).then((res) => {
      console.log(res);
      dispatch(User.checkoutOrder(res.data));
    });
