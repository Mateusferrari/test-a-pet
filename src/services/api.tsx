// External library
import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://json-server-deploy-iyxd.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
