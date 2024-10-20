import axios from "axios";
const BASE_URL = "https://koiservice-ceeeanfchke0epds.southeastasia-01.azurewebsites.net/api";

export const API = axios.create({
  baseURL: BASE_URL,
});