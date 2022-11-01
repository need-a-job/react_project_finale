import axios from "axios";
import { debug } from "console";
import { User } from "../interfaces/User";

const api_base: string = process.env.REACT_APP_API_BASE || ""; //localhost:8000/api

// add user
export const register = (newUser: User): Promise<User> => {
  return axios.post(`${api_base}/register`, newUser);
};

// check existing user for login

export const findUser = (user: User): Promise<any> => {
  return axios.post(`${api_base}/login`, user);
};
