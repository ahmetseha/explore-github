import axios from "axios";

const getUserRepos = axios.create({
  baseURL: `https://api.github.com/users/`,
});

export default getUserRepos;
