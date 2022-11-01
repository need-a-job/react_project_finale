import axios from "axios";
import { Business } from "../interfaces/BusinessCard";
import _ from "lodash";

const api_base: string = process.env.REACT_APP_API_BASE || "";

// add new bizzCard

export const addBizzCard = (newBizzCard: Business): Promise<Business> => {
  console.log(newBizzCard);
  return axios.post(`${api_base}/cards`, newBizzCard, {
    headers: {
      Authorization: sessionStorage.getItem("token"),
    },
  });
};

// get bizzCard

export const getBizzCards = (): Promise<any> => {
  return axios.get(`${api_base}/cards/all`, {
    headers: {
      Authorization: sessionStorage.getItem("token"),
    },
  });
};

// Get Card by Card ID
export const getCardById = (id: string): Promise<any> => {
  return axios.get(`${api_base}cards/${id}`, {
    headers: {
      Authorization: sessionStorage.getItem("token"),
    },
  });
};

// Get Card by User ID
export const getCardByUserId = (): Promise<any> => {
  return axios.get(`${api_base}cards/my-cards`, {
    headers: {
      Authorization: sessionStorage.getItem("token"),
    },
  });
};

// // Edit Card
// export const editCard = (card: Business): Promise<any> => {
//   let body = _.omit(card, ["_id"]);
//   return axios.put(`${api_base}cards/${card._id}`, body, {
//     headers: { Authorization: sessionStorage.getItem("token") },
//   });
// };

// // Delete Card
// export const deleteCard = (card: Business): Promise<any> => {
//   return axios.delete(`${api_base}cards/${card._id}`, {
//     headers: { Authorization: sessionStorage.getItem("token") },
//   });
// };