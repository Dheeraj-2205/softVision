import axios from "axios";

const API_BASE_URL = "http://localhost:3001"; // Adjust the port as needed

const ApiService = {
  getUsers: () => axios.get(`${API_BASE_URL}/users`),
  addUser: (user) => axios.post(`${API_BASE_URL}/users`, user),
  updateUser: (user) => axios.put(`${API_BASE_URL}/users/${user.id}`, user),
  deleteUser: (userId) => axios.delete(`${API_BASE_URL}/users/${userId}`),
  // Implement additional API calls as needed
};

export default ApiService;