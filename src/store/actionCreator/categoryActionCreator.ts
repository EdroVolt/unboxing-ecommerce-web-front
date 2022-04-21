import { Dispatch } from "react";
import Unboxing from "../../apis/unboxing";
import * as Category from "../actions/Category.action";
import { ActionType } from "../actions/types";

export const getAllCategoriesAPI =
  (page: number = 1) =>
  (dispatch: Dispatch<ActionType>) =>
    Unboxing.get(`/categories?page=${page}`).then((res) => {
      console.log(res);
      dispatch(Category.getAllCategories(res.data));
    });
