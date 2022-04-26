import { Dispatch } from "react";
import Unboxing from "../../apis/unboxing";
import ProductType from "../../models/Product.model";
import * as Product from "../actions/Product.actions";
import { ActionType } from "../actions/types";
import ReviewType from "../../models/Review.model";

// const getAllProductsBy = (
//   filter: any,
//   dispatch: Dispatch<ActionType>,
//   page: number = 1
// ) => {
//   const key = Object.keys(filter)[0];
//   const value = Object.values(filter)[0];
//   return Unboxing.get(`/products?page=${page}&${key}=${value}`)
//     .then((res) => {
//
//       dispatch(Product.getAllProductsByCategory(res.data));
//     })
//
// };

export const getAllProductsAPI =
  (page: number = 1) =>
  (dispatch: Dispatch<ActionType>) =>
    Unboxing.get(`/products?page=${page}`).then((res) => {
      dispatch(Product.getAllProducts(res.data));
    });

export const getAllProductsByCategoryAPI =
  (categoryId: string, page: number = 1) =>
  (dispatch: Dispatch<ActionType>) =>
    Unboxing.get(`/products?page=${page}&category=${categoryId}`).then(
      (res) => {
        dispatch(Product.getAllProductsByCategory(res.data));
      }
    );

export const getAllProductsByNameAPI =
  (name: string, page: number = 1) =>
  (dispatch: Dispatch<ActionType>) =>
    Unboxing.get(`/products?page=${page}&name=${name}`).then((res) => {
      dispatch(Product.getAllProductsByName(res.data));
    });

// NOTE: change dispatch action to be descriptive
export const getAllProductsByNameAndCategoryAPI =
  (name: string, categoryId: string, page: number = 1) =>
  (dispatch: Dispatch<ActionType>) =>
    Unboxing.get(
      `/products?page=${page}&name=${name}&category=${categoryId}`
    ).then((res) => {
      dispatch(Product.getAllProductsByName(res.data));
    });

export const getAllOfferProductsAPI =
  (page: number = 1) =>
  (dispatch: Dispatch<ActionType>) =>
    Unboxing.get(`/products?page=${page}&offer=true`).then((res) => {
      dispatch(Product.getAllOfferProducts(res.data));
    });

export const getProductDetailsAPI =
  (_id: string | number) => (dispatch: Dispatch<ActionType>) =>
    Unboxing.get(`/products/:${_id}`).then((res) => {
      dispatch(Product.getProductDetails(res.data));
    });

// ------------------ Add ----------------------

export const addProductAPI =
  (productData: any) => (dispatch: Dispatch<ActionType>) =>
    Unboxing.post(`/products`, productData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${productData._boundary}`,
      },
    }).then((res) => {
      dispatch(Product.addProduct(res.data));
    });

export const addReviewToProductAPI =
  (productId: string, review: ReviewType) => (dispatch: Dispatch<ActionType>) =>
    Unboxing.post(`/products/${productId}/reviews`, review).then((res) => {
      dispatch(Product.addReviewOnProduct(res.data));
    });

// ------------------ Edit ----------------------

export const EditProductAPI =
  (productData: ProductType) => (dispatch: Dispatch<ActionType>) =>
    Unboxing.put(`/products/${productData._id}`, productData).then((res) => {
      dispatch(Product.editProduct(res.data));
    });

export const deleteProductAPI =
  (productId: string | number) => (dispatch: Dispatch<ActionType>) =>
    Unboxing.delete(`/products/${productId}`).then((res) => {
      dispatch(Product.deleteProductFromStore(res.data._id));
    });
