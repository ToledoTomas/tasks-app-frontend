import axios from "../libs/axios";

export const getTasksRequest = () => axios.get(`/tasks`);

export const getTaskRequest = id => axios.get(`/tasks/${id}`);

export const createTaskRequest = (title, description, status, userId) =>
  axios.post(`/tasks`, { title, description, status, userId });

export const updateTaskRequest = task =>
  axios.patch(`/tasks/${task.id}`, task);

export const deleteTaskRequest = id => axios.delete(`/tasks/${id}`);
