import axios from "axios";

const API = "http://localhost:3000";

export const getTasksRequest = () => axios.get(`${API}/tasks`);

export const getTaskRequest = id => axios.get(`${API}/tasks/${id}`);

export const createTaskRequest = task => axios.post(`${API}/tasks`, task);

export const updateTaskRequest = task =>
  axios.patch(`${API}/tasks/${task.id}`, task);

export const deleteTaskRequest = id => axios.delete(`${API}/tasks/${id}`);
