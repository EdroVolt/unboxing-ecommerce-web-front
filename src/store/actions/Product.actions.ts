import ProductType from "../../models/Product.model";
import ReviewType from "../../models/Review.model";
import * as actions from "./types";

// ------------ Get -----------------------------------------

export const getAllProducts = (page: number) => ({
  type: actions.GET_ALL_PRODUCTS,
  payload: {
    page,
  },
});

export const getAllProductsByCategory = (page: number, category: string) => ({
  type: actions.GET_ALL_PRODUCTS_BY_CATEGORY,
  payload: {
    page,
    category,
  },
});

export const getAllProductsByName = (page: number, name: string) => ({
  type: actions.GET_ALL_PRODUCTS_BY_NAME,
  payload: {
    page,
    name,
  },
});

export const getAllProductsByPrice = (page: number, price: number) => ({
  type: actions.GET_ALL_PRODUCTS_BY_PRICE,
  payload: {
    page,
    price,
  },
});

export const getProductDetails = (id: string | number) => ({
  type: actions.GET_ALL_PRODUCTS_BY_PRICE,
  payload: {
    id,
  },
});

// ------------ Add -----------------------------------------

export const addProduct = (product: ProductType) => ({
  type: actions.ADD_PRODUCT,
  payload: {
    product,
  },
});

export const addOffer = (offer: ProductType) => ({
  type: actions.ADD_OFFER,
  payload: {
    offer,
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
