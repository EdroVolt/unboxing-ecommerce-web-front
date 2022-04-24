import { Dispatch } from "react";
import Unboxing from "../../apis/unboxing";
import { singinUser } from "../actions/auth.actions";
import { ActionType } from "../actions/types";

export const singInUserAPI =
  (email: string, password: string) => (dispatch: Dispatch<ActionType>) =>
    Unboxing.post("/login", { email, password }).then((res) =>
      dispatch(singinUser(res.data.data, res.data.token))
    );
