import axios from "axios";

const API = axios.create({baseURL: "https://stayhealthycapstoneapp.herokuapp.com"});

export const createDrug = (formData) => API.post("/drugs/createDrug", formData);
export const getDrugs = () => API.get("/drugs/getDrugs");
export const getDrug = (id) => API.get(`/drugs/${id}`);
export const deleteDrug = (id) => API.delete(`/drugs/${id}`);
export const updateDrug = (id, formData) => API.patch(`/drugs/${id}`, formData);

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
