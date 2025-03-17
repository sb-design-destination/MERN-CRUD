import axios from 'axios';

const API_URL = 'http://localhost:5000/product';


export const getUsers = (data) => axios.get(`${API_URL}/${"GETPRODUCT"}`, data);
export const getUser = (id) => axios.get(`${API_URL}/${id}`);
export const createUser = (data) => axios.post(`${API_URL}/${"CREATEPRODUCT"}`, data);
export const updateUser = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API_URL}/${"DELETEPRODUCT"}`, { data: { id } });
