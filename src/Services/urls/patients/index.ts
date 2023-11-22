import { authApiInstance } from "../../apiInstance";

export const patients = {
  geAllFromDoctor: (id: string) => {
      return authApiInstance.get(`/medico/listaPacientes/${id}`);
  }
}


