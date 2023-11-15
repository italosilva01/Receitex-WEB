import { apiInstance } from "../../apiInstance";
import { IPrescriptionCreateData, ICertificateCreateData, IRequestCreateData } from "./types";

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
  create: (data: ICertificateCreateData) => {
    return apiInstance.post("/atestado", data);
  }
};

export const requests = {
  create: (data: IRequestCreateData) => {
    return apiInstance.post("/requisicao", data);
  }
};