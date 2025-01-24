import axios from "axios";

const url = "http://localhost:3000";

export const getTasksRequest = () => axios.get(`${url}/tasks`);

export const getTaskRequest = id => axios.get(`${url}/tasks/${id}`);

export const createTaskRequest = (title, description, status, userId) =>
  axios.post(`${url}/tasks`, { title, description, status, userId });

export const updateTaskRequest = task =>
  axios.patch(`${url}/tasks/${task.id}`, task);

export const deleteTaskRequest = id => axios.delete(`${url}/tasks/${id}`);
