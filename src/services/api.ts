import axios from "axios";

const token = import.meta.env.VITE_AUTH_API;

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
