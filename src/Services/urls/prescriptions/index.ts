import { apiInstance } from "../../apiInstance";
import { IPrescriptionCreateData } from "./types";

export const prescriptions = {
  getAll: () => {
    return apiInstance.get("/receita");
  },
  getOne: (id: string) => {
    return apiInstance.get<IPrescriptionCreateData>(`/receita?id=${id}`);
  },
  create: (data: IPrescriptionCreateData) => {
    return apiInstance.post("/receita", data);
  },
  update: (id: string, data: any) => {
    return apiInstance.put(`/receita/${id}`, data);
  },
  delete: (id: string) => {
    return apiInstance.delete(`/receita/${id}`);
  },
};

export const certificates = {
  create: (data: IPrescriptionCreateData) => {
    return apiInstance.post("/atestado", data);
  }
};
