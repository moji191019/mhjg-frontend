import axios, { AxiosRequestConfig } from 'axios';
const API_BASE_URL = 'http://localhost:8081/common';

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
};
const client = axios.create(axiosConfig);

interface LoginRequest {
  email: string;
  password: string;
}
interface LoginResponse {
  email: string;
  password: string;
}

export const login = async (formData: LoginRequest) => {
  console.log('login', formData);
  const response = await client.get<LoginResponse>('/user/kim');
  // const response = await fetch('http://localhost:8081/user/kim');
  console.log('login res', response);
};
