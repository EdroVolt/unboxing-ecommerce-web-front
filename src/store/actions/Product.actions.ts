import ProductType from "../../models/Product.model";
import ReviewType from "../../models/Review.model";
import * as actions from "./types";

// ------------ Get -----------------------------------------

export const getAllProducts = (data: {
  data: ProductType[];
  numOfPages: number;
}) => ({
  type: actions.GET_ALL_PRODUCTS,
  payload: {
    products: data.data,
    numOfPages: data.numOfPages,
  },
});

export const getAllProductsByCategory = (data: {
  data: ProductType[];
  numOfPages: number;
}) => ({
  type: actions.GET_ALL_PRODUCTS_BY_CATEGORY,
  payload: {
    products: data.data,
    numOfPages: data.numOfPages,
  },
});

export const getAllProductsByName = (data: {
  data: ProductType[];
  numOfPages: number;
}) => ({
  type: actions.GET_ALL_PRODUCTS_BY_NAME,
  payload: {
    products: data.data,
    numOfPages: data.numOfPages,
  },
});

export const getAllOfferProducts = (data: {
  data: ProductType[];
  numOfPages: number;
}) => ({
  type: actions.GET_ALL_PRODUCTS_BY_NAME,
  payload: {
    products: data.data,
    numOfPages: data.numOfPages,
  },
});

export const getProductDetails = (product: ProductType) => ({
  type: actions.GET_PRODUCT_DETAILS,
  payload: {
    product,
  },
});

// ------------ Add -----------------------------------------

export const addProduct = (product: ProductType) => ({
  type: actions.ADD_PRODUCT,
  payload: {
    product,
  },
});

export const addReviewOnProduct = (product: ProductType) => ({
  type: actions.ADD_REVIEW_ON_PRODUCT,
  payload: {
    product,
  },
});

// ------------ Edit -----------------------------------------

export const editProduct = (product: ProductType) => ({
  type: actions.EDIT_PRODUCT,
  payload: {
    product,
  },
});

// ------------ Delete -----------------------------------------

export const deleteProductFromStore = (productId: string | number) => ({
  type: actions.DELETE_PRODUCT_FROM_STORE,
  payload: {
    productId,
  },
});
