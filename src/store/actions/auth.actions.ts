import UserType from "../../models/User.model";
import { SIGNIN_USER } from "./types";

export const singinUser = (user: UserType, token: string) => ({
  type: SIGNIN_USER,
  payload: {
    user,
    token,
  },
});
