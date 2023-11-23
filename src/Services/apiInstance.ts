import axios from "axios";

export const baseURL = `${import.meta.env.VITE_API_URL}`;
export const authURL = `${import.meta.env.VITE_API_AUTH_URL}`;


export const apiInstance = axios.create({
  baseURL, 
});

export const authApiInstance = axios.create({
  baseURL: authURL,
});

