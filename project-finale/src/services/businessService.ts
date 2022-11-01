import axios from "axios";
import { User } from "../interfaces/User";

const api: string = process.env.REACT_APP_API || "";

// add new business man :)

export const addBusiness = (newBizz: User):Promise<User> => {
  return axios.post(`${api}bizz`, newBizz);
};

// check for existing business man

export const findBizz = (biz: User):Promise<any> => {
  console.log(`${api}bizz?email=${biz.email}`);
  return axios.post(`${api}api/login`, biz);
};

