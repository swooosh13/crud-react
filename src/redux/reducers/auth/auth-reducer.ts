import { AnyAction } from "redux";
import { authTypes } from "../type";

export type authState = {
  isAuth: boolean;
  email: string;
  userToken: string | undefined;
}

export const initialState: authState = {
  isAuth: isSignIn(),
  email: getUser(),
  userToken: getToken()
}

export const authReducer = (state: authState = initialState, action: AnyAction) => {
  switch (action.type) {
    case authTypes.RETREIVE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isAuth: true
      }
    case authTypes.LOGIN:
      setTokenUser(action.token, action.email);
      return {
        ...state,
        email: action.email,
        userToken: action.token,
        isAuth: true
      }
    case authTypes.LOGOUT:
      removeTokenUser();
      return {
        ...state,
        userToken: null,
        email: null,
        isAuth: false
      }
    case authTypes.REGISTER:
      setTokenUser(action.email, action.token);
      return {
        ...state,
        userToken: action.token,
        email: action.email,
        isAuth: true
      }
    default:
      return state;
  }
}

// LocalStorage

function isSignIn(): boolean {
  const token = localStorage.getItem("react-token");
  return token ? true : false;
}

function getUser(): string {
  const userEmail = localStorage.getItem("react-email");
  return userEmail ? JSON.parse(userEmail) : ""
}

function setTokenUser(token: string, email: string):void {
  localStorage.setItem("react-token", token);
  localStorage.setItem("react-email", JSON.stringify(email));
}

function removeTokenUser():void {
  localStorage.removeItem("react-token");
  localStorage.removeItem("react-email");
}

function getToken():string | undefined {
  const token = localStorage.getItem("react-token");
  return token ? token : undefined;
}