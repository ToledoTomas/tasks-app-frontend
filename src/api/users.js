import axios from "axios";

const url = "http://localhost:3000";

export const getUserRequest = () => axios.get(`${url}/users`);

export const deleteUserRequest = id => axios.delete(`${url}/users/${id}`);
