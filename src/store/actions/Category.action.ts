import CategoryType from "../../models/Category.model";
import * as actions from "./types";

// --------- Get ---------------------
export const getCategories = () => ({
  type: actions.GET_CATEGORIES,
  payload: {},
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
