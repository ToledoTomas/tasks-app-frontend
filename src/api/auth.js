import axios from "../libs/axios";

export const registerRequest = user => axios.post(`/users`, user);

export const loginRequest = user => axios.post(`/auth/login`, user);