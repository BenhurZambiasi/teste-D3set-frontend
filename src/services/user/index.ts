import api from "../api";

export type TPayloadPerson = {
  name: string;
  data_nascimento: string;
  numbers: string[];
};
export const createPerson = async (payload: TPayloadPerson) => {
  try {
    return await api.post("/user", payload);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAllPersons = async () => {
  try {
    return await api.get("/users");
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPersonById = async (id: string) => {
  try {
    return await api.get("/user", { params: { id } });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updatePersonById = async (id: string, payload: TPayloadPerson) => {
  try {
    return await api.put("/user", payload, { params: { id } });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const DeletePerson = async (id: string) => {
  try {
    return await api.delete("/user", { params: { id } });
  } catch (error) {
    return Promise.reject(error);
  }
};
