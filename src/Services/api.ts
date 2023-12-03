import { patients } from "./urls/patients/index";
import { medics } from "./urls/medics/index";
import {
  prescriptions,
  certificates,
  requests,
} from "./urls/prescriptions/index";
import { authLogin } from "./urls/auth";

export const api = {
  prescriptions,
  certificates,
  requests,
  patients,
  medics,
  authLogin
};
