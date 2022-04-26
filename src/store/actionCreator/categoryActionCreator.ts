import { Dispatch } from "react";
import Unboxing from "../../apis/unboxing";
import CategoryType from "../../models/Category.model";
import * as Category from "../actions/Category.action";
import { ActionType } from "../actions/types";

export const getAllCategoriesAPI =
  (page: number = 1) =>
  (dispatch: Dispatch<ActionType>) =>
    Unboxing.get(`/categories?page=${page}`).then((res) => {
      dispatch(Category.getAllCategories(res.data));
    });

// ----------------------- Add -------------------------

export const addCategoryAPI =
  (category: CategoryType) => (dispatch: Dispatch<ActionType>) =>
    Unboxing.post(`/categories`).then((res) => {
      dispatch(Category.addCategory(res.data));
    });
