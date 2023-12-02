import { LoginUser } from "../../../components/Page/Sign/login";
import { authApiInstance } from "../../apiInstance";


export const authLogin = {
    loginUser: (data: LoginUser) => {
      return authApiInstance.post(`/auth/login`, data);
    },
  };