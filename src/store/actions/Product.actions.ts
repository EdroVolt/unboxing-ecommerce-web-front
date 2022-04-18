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

// export const getProductDetails = (_id: string | number) => ({
//   type: actions.GET_PRODUCT_DETAILS,
//   payload: {
//     _id,
//   },
// });

// ------------ Add -----------------------------------------

export const addProduct = (product: ProductType) => ({
  type: actions.ADD_PRODUCT,
  payload: {
    product,
  },
});

export const addReviewOnProduct = (
  productId: string | number,
  review: ReviewType
) => ({
  type: actions.ADD_REVIEW_ON_PRODUCT,
  payload: {
    productId,
    review,
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
