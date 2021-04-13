import { AppDispatch } from "../store";
import { authTypes } from "../type";

export const login = ({email, token}: {email: string, token: string}) =>
async (dispatch: AppDispatch) => {
  dispatch({type: authTypes.LOGIN, email, token})
}

export const logout = () => async (dispatch: AppDispatch) => {
  dispatch({type: authTypes.LOGOUT});
}
