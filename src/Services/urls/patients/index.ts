import { IGetPatientFormData } from "../../../Page/Patients/types";
import { authApiInstance } from "../../apiInstance";

export const patients = {
  geAllFromDoctor: (id: string) => {
      return authApiInstance.get<[IGetPatientFormData]>(`/medico/listaPacientes/${id}`);
  }
}


