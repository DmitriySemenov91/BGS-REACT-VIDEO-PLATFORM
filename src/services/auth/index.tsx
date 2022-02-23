import API from "../https";

export const apiLogin = (userData: object) =>
  API.post("/Authorization/SignIn", userData);
