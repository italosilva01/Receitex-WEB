import { RegisterUser } from "../../../components/Page/Sign/cadastro";
import { authApiInstance } from "../../apiInstance";

export const medics = {
  registerMedic: (data: RegisterUser) => {
    return authApiInstance.post(`/medico`, data);
  },
};
