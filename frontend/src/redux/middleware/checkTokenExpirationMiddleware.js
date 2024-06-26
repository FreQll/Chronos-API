import Cookies from "js-cookie";
import { savedState } from "../store";
import { jwtDecode } from "jwt-decode";

const checkTokenExpirationMiddleware = (store) => (next) => (action) => {
  if (action.type === "CHECK_TOKEN_EXPIRATION") {
    if (savedState?.isAuthenticated) {
      const token = Cookies.get("token");
      if (!token) {
        localStorage.removeItem("authState");
        action.type = "LOGOUT";
      }
      const currentTime = new Date().getTime();
      const tokenExpiration = jwtDecode(token).exp * 1000;
      if (currentTime > tokenExpiration) {
        localStorage.removeItem("authState");
        Cookies.remove("token");
        action.type = "LOGOUT";
      }
    }
  }
  return next(action);
};

export default checkTokenExpirationMiddleware;
