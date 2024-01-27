// src/services/axios.ts
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios';
import axios from 'axios';

interface InternalAxiosRequestConfig<T = any> extends AxiosRequestConfig<T> {
  headers?: {
    Accept?: string;
    "Content-Length"?: string;
    "User-Agent"?: string;
    "Content-Encoding"?: string;
    Authorization?: string;
    [key: string]: string | undefined;
  } | AxiosRequestHeaders;
}

const axiosInstance: AxiosInstance = axios.create({
  // baseURL: "https://localhost:7138/",
  baseURL: 'http://localhost:5223',
  timeout: 10000,
  withCredentials: true // Agregar esta línea
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig | any) => {
    const token = localStorage.getItem('Token');
    if (String(token).length > 1) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers = {
      ...config.headers,
      'Access-Control-Allow-Origin': 'http://localhost:5173', 
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Content-Type': 'application/json'
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Puedes realizar manipulaciones en la respuesta antes de que se entregue al componente
    return response;
  },
  (error) => {
    // Puedes manejar errores en las respuestas aquí
    return Promise.reject(error);
  }
);

export default axiosInstance;
