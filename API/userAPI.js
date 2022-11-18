import axios from "axios";
export const API_URI = "http://localhost:3000/api/v1/";

export const userAPI = {
  login: async (email, password) => {
    const res = await axios.post(`${API_URI}users/login`, {
      correo: email,
      contraseña: password,
    });
    return res.data;
  },
  register: async (data) => {
    const res = await axios.post(`${API_URI}users/createUser`, data);
    return res.data;
  }
};
