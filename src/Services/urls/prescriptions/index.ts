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
  getOne: (id: string) => {
    return apiInstance.get<ICertificateCreateData>(`/atestado?id=${id}`);
  },
  create: (data: ICertificateCreateData) => {
    return apiInstance.post("/atestado", data);
  }
};

export const requests = {
  getOne: (id: string) => {
    return apiInstance.get<IRequestCreateData>(`/requisicao?id=${id}`);
  },
  create: (data: IRequestCreateData) => {
    return apiInstance.post("/requisicao", data);
  }
};