import { getProductDetails } from './../actions/Product.actions';
import { Dispatch } from "react";
import Unboxing from "../../apis/unboxing";
import ProductType from "../../models/Product.model";
import * as Product from "../actions/Product.actions";
import { ActionType } from "../actions/types";

// const getAllProductsBy = (
//   filter: any,
//   dispatch: Dispatch<ActionType>,
//   page: number = 1
// ) => {
//   const key = Object.keys(filter)[0];
//   const value = Object.values(filter)[0];
//   return Unboxing.get(`/products?page=${page}&${key}=${value}`)
//     .then((res) => {
//       console.log(res);
//       dispatch(Product.getAllProductsByCategory(res.data));
//     })
//     .catch((err) => console.log(err));
// };

export const getAllProductsAPI =
  (page: number = 1) =>
  (dispatch: Dispatch<ActionType>) =>
    Unboxing.get(`/products?page=${page}`)
      .then((res) => {
        console.log(res);
        dispatch(Product.getAllProducts(res.data));
      })
      .catch((err) => console.log(err));

export const getAllProductsByCategoryAPI =
  (categoryId: string, page: number = 1) =>
  (dispatch: Dispatch<ActionType>) =>
    Unboxing.get(`/products?page=${page}&category=${categoryId}`)
      .then((res) => {
        console.log(res);
        dispatch(Product.getAllProductsByCategory(res.data));
      })
      .catch((err) => console.log(err));

export const getAllProductsByNameAPI =
  (name: string, page: number = 1) =>
  (dispatch: Dispatch<ActionType>) =>
    Unboxing.get(`/products?page=${page}&name=${name}`)
      .then((res) => {
        console.log(res);
        dispatch(Product.getAllProductsByName(res.data));
      })
      .catch((err) => console.log(err));

export const getAllOfferProductsAPI =
  (page: number = 1) =>
  (dispatch: Dispatch<ActionType>) =>
    Unboxing.get(`/products?page=${page}&offer=true`)
      .then((res) => {
        console.log(res);
        dispatch(Product.getAllOfferProducts(res.data));
      })
      .catch((err) => console.log(err));

      export const getProductDetailsAPI =
  (_id: string| number ) =>
  (dispatch: Dispatch<ActionType>) =>
    Unboxing.get(`/products/:${_id}`)
      .then((res) => {
        console.log(res);
        dispatch(Product.getProductDetails(res.data));
      })
      .catch((err) => console.log(err));

// ------------------ Add ----------------------

export const addProduct =
  (productData: ProductType) => (dispatch: Dispatch<ActionType>) =>
    Unboxing.post(`/products`, productData)
      .then((res) => {
        console.log(res);
        dispatch(Product.getAllOfferProducts(res.data));
      })
      .catch((err) => console.log(err));

// (product: ProductType) => ({
//   type: actions.ADD_PRODUCT,
//   payload: {
//     product,
//   },
// });
