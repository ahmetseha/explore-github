import axios from "axios";

const getUsers = axios.create({
  baseURL: `https://api.github.com/users/`,
});

export default getUsers;
