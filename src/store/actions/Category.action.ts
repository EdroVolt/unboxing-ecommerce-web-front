import CategoryType from "../../models/Category.model";
import * as actions from "./types";

// --------- Get ---------------------
export const getAllCategories = (data: {
  data: CategoryType[];
  numOfPages: number;
}) => ({
  type: actions.GET_CATEGORIES,
  payload: {
    categories: data.data,
    numOfPages: data.numOfPages,
  },
});

export const getCategoryDetails = (_id: string | number) => ({
  type: actions.GET_CATEGORY_DETAILS,
  payload: {
    _id,
  },
});

// --------- Add ---------------------

export const addCategory = (category: CategoryType) => ({
  type: actions.ADD_CATEGORY,
  payload: {
    category,
  },
});

// --------- Edit ---------------------

export const editCategory = (category: CategoryType) => ({
  type: actions.EDIT_CATEGORY,
  payload: {
    category,
  },
});

// --------- Delete ---------------------

export const deleteCategory = (_id: string | number) => ({
  type: actions.DELETE_CATEGORY,
  payload: {
    _id,
  },
});
